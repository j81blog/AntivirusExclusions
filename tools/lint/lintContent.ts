/**
 * Content checks the zod schema can't do, because its defaults hide missing
 * fields. Reads the raw frontmatter of every item file.
 *
 * Errors (exit code 1): missing or out-of-order row fields, unknown types,
 * duplicate rows. Warnings: hard-coded Program Files paths, environment
 * variables with unusual casing, items without exclusions.
 *
 * Run: npx tsx tools/lint/lintContent.ts
 */
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as yaml from 'js-yaml';
import exclusionTypeMap from '../shared/exclusion-type-map.json' with { type: 'json' };

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const ITEMS_DIR = path.join(ROOT, 'src/content/items');

const FIELDS = ['path', 'type', 'description', 'justification', 'condition', 'status', 'source'];
const TYPES = new Set(Object.values(exclusionTypeMap as Record<string, string>));
const STATUSES = new Set(['current', 'legacy']);

type Row = Record<string, unknown>;
interface Finding {
  file: string;
  message: string;
}

const errors: Finding[] = [];
const warnings: Finding[] = [];

interface ItemData {
  exclusions?: Row[];
  sources?: { url: string }[];
  related?: string[];
}

function readItem(file: string): ItemData | null {
  const text = readFileSync(path.join(ITEMS_DIR, file), 'utf8');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    errors.push({ file, message: 'No frontmatter found.' });
    return null;
  }
  return (yaml.load(match[1]) ?? {}) as ItemData;
}

const files = readdirSync(ITEMS_DIR).filter((f) => f.endsWith('.md')).sort();
const slugs = new Set(files.map((f) => f.replace(/\.md$/, '')));
const rowsByFile = new Map<string, Row[]>();
const itemByFile = new Map<string, ItemData>();
for (const file of files) {
  const item = readItem(file);
  if (!item) continue;
  itemByFile.set(file, item);
  rowsByFile.set(file, item.exclusions ?? []);
}

for (const [file, item] of itemByFile) {
  for (const slug of item.related ?? []) {
    if (!slugs.has(slug)) errors.push({ file, message: `related item "${slug}" does not exist.` });
    if (`${slug}.md` === file) errors.push({ file, message: 'an item cannot be related to itself.' });
  }
}

// Most common spelling of each environment variable, used as the reference casing.
const envSpellings = new Map<string, Map<string, number>>();
for (const rows of rowsByFile.values()) {
  for (const row of rows) {
    for (const [name] of String(row.path ?? '').matchAll(/%[^%\\]+%/g)) {
      const counts = envSpellings.get(name.toLowerCase()) ?? new Map<string, number>();
      counts.set(name, (counts.get(name) ?? 0) + 1);
      envSpellings.set(name.toLowerCase(), counts);
    }
  }
}
const preferredEnv = new Map(
  [...envSpellings].map(([key, counts]) => [key, [...counts].sort((a, b) => b[1] - a[1])[0][0]]),
);

for (const [file, rows] of rowsByFile) {
  if (rows.length === 0) warnings.push({ file, message: 'No exclusions.' });

  const seen = new Map<string, number>();
  rows.forEach((row, index) => {
    const where = `row ${index + 1} (${String(row.path ?? '?')})`;
    const keys = Object.keys(row);

    const missing = FIELDS.filter((f) => !keys.includes(f));
    const unknown = keys.filter((k) => !FIELDS.includes(k));
    if (missing.length) errors.push({ file, message: `${where}: missing ${missing.join(', ')}.` });
    if (unknown.length) errors.push({ file, message: `${where}: unknown field ${unknown.join(', ')}.` });
    if (!missing.length && !unknown.length && keys.join() !== FIELDS.join()) {
      errors.push({ file, message: `${where}: fields must be in the order ${FIELDS.join(', ')}.` });
    }

    if (row.type !== undefined && !TYPES.has(String(row.type))) {
      errors.push({ file, message: `${where}: unknown type "${row.type}". Use one of: ${[...TYPES].join(', ')}.` });
    }
    if (row.status !== undefined && !STATUSES.has(String(row.status))) {
      errors.push({ file, message: `${where}: status must be current or legacy.` });
    }
    const sourceUrls = (itemByFile.get(file)?.sources ?? []).map((s) => s.url);
    if (row.source && !sourceUrls.includes(String(row.source))) {
      errors.push({ file, message: `${where}: source must be one of the item's source URLs.` });
    }

    const rowPath = String(row.path ?? '');
    const key = `${rowPath.toLowerCase()}|${String(row.type ?? '').toLowerCase()}`;
    if (seen.has(key)) {
      errors.push({ file, message: `${where}: duplicate of row ${seen.get(key)}.` });
    } else {
      seen.set(key, index + 1);
    }

    if (/^[A-Z]:\\Program Files/i.test(rowPath)) {
      warnings.push({ file, message: `${where}: hard-coded path, use %ProgramFiles% or %ProgramFiles(x86)%.` });
    }
    for (const [name] of rowPath.matchAll(/%[^%\\]+%/g)) {
      const preferred = preferredEnv.get(name.toLowerCase());
      if (preferred && preferred !== name) {
        warnings.push({ file, message: `${where}: ${name} is usually written ${preferred}.` });
      }
    }
  });
}

for (const w of warnings) console.log(`warning  ${w.file}: ${w.message}`);
for (const e of errors) console.log(`error    ${e.file}: ${e.message}`);
console.log(`\n${files.length} files checked: ${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length > 0 ? 1 : 0);
