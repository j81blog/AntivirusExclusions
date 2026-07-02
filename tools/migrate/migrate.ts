import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import Papa from 'papaparse';
import * as cheerio from 'cheerio';
import * as yaml from 'js-yaml';
import { slugify } from '../../src/lib/slugify';
import exclusionTypeMap from '../shared/exclusion-type-map.json' with { type: 'json' };

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '../..');
const ITEMS_DIR = path.join(ROOT, 'src/content/items');
const VENDORS_DIR = path.join(ROOT, 'src/content/vendors');
const FORCE = process.argv.includes('--force');

interface Source {
  label: string;
  url: string;
}

interface Note {
  kind: 'note' | 'extra' | 'warning';
  text: string;
}

interface Exclusion {
  path: string;
  type: string;
  description: string;
  justification: string;
}

function readCsvFile(filePath: string): string {
  const buffer = readFileSync(filePath);
  // Most exports are UTF-16 LE with a BOM, but a few in this repo are plain
  // UTF-8 with no BOM at all - decoding those as UTF-16 produces garbage and
  // silently yields zero valid rows, so detect per-file instead of assuming.
  if (buffer[0] === 0xff && buffer[1] === 0xfe) {
    return buffer.subarray(2).toString('utf16le');
  }
  return buffer.toString('utf8');
}

function normalizeExclusionType(raw: string): string {
  const trimmed = raw.trim();
  const mapped = (exclusionTypeMap as Record<string, string>)[trimmed];
  if (!mapped) {
    console.warn(`  [warn] Unmapped ExclusionType "${trimmed}" - keeping as-is`);
    return trimmed;
  }
  return mapped;
}

function parseExclusions(csvText: string): Exclusion[] {
  // Several source files have malformed header rows (wrong delimiter, swapped
  // or mismatched column names - confirmed by inspecting the raw bytes), so
  // header-name-based mapping silently drops columns. The data rows
  // themselves are consistently Exclusion;ExclusionType;Description;Justification,
  // so parse positionally and discard whatever the header row says.
  const result = Papa.parse<string[]>(csvText, {
    header: false,
    delimiter: ';',
    skipEmptyLines: true,
  });

  const dataRows = result.data.slice(1);

  return dataRows
    .filter((row) => (row[0] ?? '').trim().length > 0)
    .map((row) => ({
      path: (row[0] ?? '').trim(),
      type: normalizeExclusionType(row[1] ?? ''),
      description: (row[2] ?? '').trim(),
      justification: (row[3] ?? '').trim(),
    }));
}

function parsePreHtml(html: string): string {
  const $ = cheerio.load(html, null, false);
  const div = $('div').first();
  const inner = div.length > 0 ? div.html() : $.root().html();
  return (inner ?? '').trim();
}

const KNOWN_LABELS = new Set(['source', 'note', 'extra', 'warning']);

type Segment =
  | { kind: 'label'; label: 'source' | 'note' | 'extra' | 'warning' }
  | { kind: 'text'; text: string }
  | { kind: 'link'; text: string; href: string }
  | { kind: 'break' };

/**
 * Flattens a mixed tree of <div>/<b>/<a>/<br>/text nodes into a linear
 * sequence of segments. Source files use two different shapes for the same
 * content - some list Source:/NOTE: lines as flat siblings, others wrap each
 * one in its own nested <div> - so wrapper tags are recursed into rather
 * than treated as opaque text, and each wrapper boundary becomes a `break`.
 */
function toSegments($: cheerio.CheerioAPI, nodes: unknown[]): Segment[] {
  const segments: Segment[] = [];

  for (const node of nodes as Array<{ type: string; name?: string }>) {
    if (node.type === 'tag' && node.name === 'b') {
      const text = $(node as never).text().trim();
      const label = text.replace(/:$/, '').toLowerCase();
      if (KNOWN_LABELS.has(label)) {
        segments.push({ kind: 'label', label: label as 'source' | 'note' | 'extra' | 'warning' });
      } else {
        segments.push({ kind: 'text', text });
      }
      continue;
    }

    if (node.type === 'tag' && node.name === 'a') {
      const $a = $(node as never);
      segments.push({ kind: 'link', text: $a.text().trim(), href: $a.attr('href') ?? '' });
      continue;
    }

    if (node.type === 'tag' && node.name === 'br') {
      segments.push({ kind: 'break' });
      continue;
    }

    if (node.type === 'tag') {
      segments.push(...toSegments($, $(node as never).contents().toArray()));
      segments.push({ kind: 'break' });
      continue;
    }

    if (node.type === 'text') {
      segments.push({ kind: 'text', text: $(node as never).text() });
      continue;
    }
  }

  return segments;
}

function parsePostHtml(html: string): { sources: Source[]; notes: Note[]; unmatched: string } {
  const $ = cheerio.load(html, null, false);
  const div = $('div').first();
  const container = div.length > 0 ? div : (($.root() as unknown) as typeof div);
  const segments = toSegments($, container.contents().toArray());

  const sources: Source[] = [];
  const notes: Note[] = [];
  let unmatched = '';
  let currentKind: 'source' | 'note' | 'extra' | 'warning' | null = null;
  let currentSourceUrl: string | null = null;
  let buffer: string[] = [];

  function flush() {
    const text = buffer.join('').replace(/\s+/g, ' ').trim();
    buffer = [];

    if (!currentKind) {
      if (text) unmatched += `${text}\n`;
    } else if (currentKind === 'source') {
      if (currentSourceUrl) {
        sources.push({ label: text || currentSourceUrl, url: currentSourceUrl });
      } else if (text) {
        unmatched += `Source: ${text}\n`;
      }
    } else if (text) {
      notes.push({ kind: currentKind, text });
    }

    currentSourceUrl = null;
  }

  for (const seg of segments) {
    if (seg.kind === 'break') {
      buffer.push(' ');
      continue;
    }
    if (seg.kind === 'label') {
      flush();
      currentKind = seg.label;
      continue;
    }
    if (seg.kind === 'link') {
      if (currentKind === 'source') currentSourceUrl = seg.href;
      buffer.push(seg.text);
      continue;
    }
    buffer.push(seg.text);
  }

  flush();

  return { sources, notes, unmatched: unmatched.trim() };
}

function parseVendorHtml(html: string): { sources: Source[]; body: string } {
  const $ = cheerio.load(html, null, false);
  const div = $('div').first();
  const container = div.length > 0 ? div : (($.root() as unknown) as typeof div);

  const sources: Source[] = [];
  container.find('b').each((_, el) => {
    const $el = $(el);
    const label = $el.text().trim().replace(/:$/, '').toLowerCase();
    if (label === 'source') {
      const next = $el.next();
      if (next.is('a')) {
        sources.push({ label: next.text().trim(), url: next.attr('href') ?? '' });
        next.remove();
      }
      $el.remove();
    }
  });

  return { sources, body: (container.html() ?? '').trim() };
}

function writeContentFile(filePath: string, frontmatter: Record<string, unknown>, body: string) {
  if (existsSync(filePath) && !FORCE) {
    console.warn(`  [skip] ${path.relative(ROOT, filePath)} already exists (use --force to overwrite)`);
    return;
  }

  const yamlText = yaml.dump(frontmatter, { lineWidth: -1, noRefs: true });
  const content = `---\n${yamlText}---\n\n${body}\n`;
  writeFileSync(filePath, content, 'utf8');
  console.log(`  [write] ${path.relative(ROOT, filePath)}`);
}

function main() {
  const rootFiles = readdirSync(ROOT);

  const vendorFiles = rootFiles
    .filter((f) => /^\d{1,3}-.+\.html$/.test(f))
    .sort((a, b) => a.localeCompare(b));

  const csvFiles = rootFiles.filter((f) => f.endsWith('.csv')).sort((a, b) => a.localeCompare(b));

  console.log(`Found ${vendorFiles.length} vendor files, ${csvFiles.length} CSV files.\n`);

  const vendors = vendorFiles.map((filename, index) => {
    const base = filename.replace(/\.html$/, '');
    const name = base.replace(/^\d+-/, '');
    const slug = slugify(name);
    const html = readFileSync(path.join(ROOT, filename), 'utf8');
    const { sources, body } = parseVendorHtml(html);
    return { filename, name, slug, order: index + 1, sources, body };
  });

  const unmatchedCsvs: string[] = [];
  const reviewFiles: string[] = [];

  for (const vendor of vendors) {
    console.log(`Vendor: ${vendor.name} (${vendor.slug})`);
    writeContentFile(
      path.join(VENDORS_DIR, `${vendor.slug}.md`),
      { title: vendor.name, order: vendor.order, sources: vendor.sources },
      vendor.body,
    );

    const vendorCsvs = csvFiles
      .filter((f) => f.startsWith(vendor.name))
      .sort((a, b) => a.localeCompare(b));

    vendorCsvs.forEach((csvFilename, itemIndex) => {
      const title = csvFilename.replace(/\.csv$/, '');
      const slug = slugify(title);

      const csvText = readCsvFile(path.join(ROOT, csvFilename));
      const exclusions = parseExclusions(csvText);

      const preFilename = `${title}-pre.html`;
      const postFilename = `${title}-post.html`;

      let bodyText = '';
      if (rootFiles.includes(preFilename)) {
        bodyText = parsePreHtml(readFileSync(path.join(ROOT, preFilename), 'utf8'));
      }

      let sources: Source[] = [];
      let notes: Note[] = [];
      if (rootFiles.includes(postFilename)) {
        const parsed = parsePostHtml(readFileSync(path.join(ROOT, postFilename), 'utf8'));
        sources = parsed.sources;
        notes = parsed.notes;
        if (parsed.unmatched) {
          bodyText += `\n\n<!-- TODO: verify migrated post content -->\n${parsed.unmatched}`;
          reviewFiles.push(slug);
        }
      }

      writeContentFile(
        path.join(ITEMS_DIR, `${slug}.md`),
        { vendor: vendor.slug, title, order: itemIndex + 1, sources, notes, exclusions, tags: [] },
        bodyText,
      );
    });
  }

  const matchedCsvs = new Set(vendors.flatMap((v) => csvFiles.filter((f) => f.startsWith(v.name))));
  for (const csvFilename of csvFiles) {
    if (!matchedCsvs.has(csvFilename)) {
      unmatchedCsvs.push(csvFilename);
    }
  }

  console.log('\nMigration complete.');
  if (unmatchedCsvs.length > 0) {
    console.warn(`\n[warn] ${unmatchedCsvs.length} CSV file(s) did not match any vendor prefix:`);
    for (const f of unmatchedCsvs) console.warn(`  - ${f}`);
  }
  if (reviewFiles.length > 0) {
    console.warn(`\n[review] ${reviewFiles.length} item(s) have unmatched post-content flagged for manual review:`);
    for (const slug of reviewFiles) console.warn(`  - src/content/items/${slug}.md`);
  }
}

main();
