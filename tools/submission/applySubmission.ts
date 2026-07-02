import { readFileSync, writeFileSync, existsSync, readdirSync, mkdtempSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import * as yaml from 'js-yaml';
import { itemSchema, vendorSchema, linkSchema, type Item, type Vendor } from '../../src/lib/contentSchemas';
import { slugify } from '../../src/lib/slugify';
import { parseIssueBody, getField, parseExclusionRows, isChecked } from './parseIssueBody';
import exclusionTypeMap from '../shared/exclusion-type-map.json' with { type: 'json' };

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '../..');
const ITEMS_DIR = path.join(ROOT, 'src/content/items');
const VENDORS_DIR = path.join(ROOT, 'src/content/vendors');

const CANONICAL_TYPES = new Set(Object.values(exclusionTypeMap as Record<string, string>));

interface SubmissionResult {
  status: 'ok' | 'error';
  errors: string[];
  vendorSlug?: string;
  itemSlug?: string;
  isNewItem?: boolean;
  isNewVendor?: boolean;
  changedFiles?: string[];
  prTitle?: string;
  prBody?: string;
}

function normalizeType(raw: string): { value: string; error?: string } {
  const trimmed = raw.trim();
  const mapped = (exclusionTypeMap as Record<string, string>)[trimmed];
  if (mapped) return { value: mapped };
  const canonicalMatch = [...CANONICAL_TYPES].find((t) => t.toLowerCase() === trimmed.toLowerCase());
  if (canonicalMatch) return { value: canonicalMatch };
  return {
    value: trimmed,
    error: `Unrecognized exclusion type "${trimmed}". Use one of: ${[...CANONICAL_TYPES].join(', ')}`,
  };
}

function splitFrontmatter(content: string): { data: Record<string, unknown>; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error('File does not have valid frontmatter');
  return { data: (yaml.load(match[1]) ?? {}) as Record<string, unknown>, body: match[2].replace(/^\n+/, '') };
}

function writeContentFile(filePath: string, frontmatter: Record<string, unknown>, body: string) {
  const yamlText = yaml.dump(frontmatter, { lineWidth: -1, noRefs: true });
  writeFileSync(filePath, `---\n${yamlText}---\n\n${body.trim()}\n`, 'utf8');
}

function maxVendorOrder(): number {
  let max = 0;
  for (const file of readdirSync(VENDORS_DIR)) {
    if (!file.endsWith('.md')) continue;
    const { data } = splitFrontmatter(readFileSync(path.join(VENDORS_DIR, file), 'utf8'));
    if (typeof data.order === 'number' && data.order > max) max = data.order;
  }
  return max;
}

function countItemsForVendor(vendorSlug: string): number {
  let count = 0;
  for (const file of readdirSync(ITEMS_DIR)) {
    if (!file.endsWith('.md')) continue;
    const { data } = splitFrontmatter(readFileSync(path.join(ITEMS_DIR, file), 'utf8'));
    if (data.vendor === vendorSlug) count += 1;
  }
  return count;
}

function resultTempPath(): string {
  const dir = process.env.RUNNER_TEMP ?? mkdtempSync(path.join(os.tmpdir(), 'ave-submission-'));
  return path.join(dir, 'submission-result.json');
}

function writeResult(result: SubmissionResult) {
  writeFileSync(resultTempPath(), JSON.stringify(result, null, 2), 'utf8');
  console.log(JSON.stringify(result, null, 2));
}

function main() {
  const issueBody = process.env.ISSUE_BODY ?? readFileSync(process.argv[2], 'utf8');
  const issueNumber = process.env.ISSUE_NUMBER ?? 'local';

  const fields = parseIssueBody(issueBody);
  const errors: string[] = [];

  const vendorChoice = getField(fields, 'Vendor').trim();
  const newVendorName = getField(fields, 'New vendor name').trim();
  const productName = getField(fields, 'Product name').trim();
  const introText = getField(fields, 'Intro text').trim();
  const sourceLabel = getField(fields, 'Source label').trim();
  const sourceUrl = getField(fields, 'Source URL').trim();
  const exclusionsRaw = getField(fields, 'Exclusions');
  const confirmation = getField(fields, 'Confirmation');

  if (!productName) errors.push('Product name is required.');
  if (!vendorChoice) errors.push('Vendor is required.');
  if (vendorChoice === 'Other (specify below)' && !newVendorName) {
    errors.push('You selected "Other" for Vendor but did not fill in New vendor name.');
  }
  if (!sourceLabel) errors.push('Source label is required.');
  if (!sourceUrl) {
    errors.push('Source URL is required.');
  } else {
    const parsed = linkSchema.safeParse({ label: sourceLabel || 'Source', url: sourceUrl });
    if (!parsed.success) errors.push(`Source URL "${sourceUrl}" is not a valid URL.`);
  }
  if (!isChecked(confirmation)) {
    errors.push('The confirmation checkbox must be checked.');
  }

  const rawRows = parseExclusionRows(exclusionsRaw);
  if (rawRows.length === 0) {
    errors.push('At least one exclusion row is required.');
  }

  const normalizedRows: Item['exclusions'] = [];
  rawRows.forEach((row, index) => {
    const lineNum = index + 1;
    if (!row.path) {
      errors.push(`Exclusion row ${lineNum}: path is required.`);
      return;
    }
    if (!row.type) {
      errors.push(`Exclusion row ${lineNum}: type is required.`);
      return;
    }
    const { value: type, error } = normalizeType(row.type);
    if (error) {
      errors.push(`Exclusion row ${lineNum}: ${error}`);
      return;
    }
    normalizedRows.push({ path: row.path, type, description: row.description, justification: row.justification });
  });

  if (errors.length > 0) {
    writeResult({ status: 'error', errors });
    return;
  }

  const vendorName = vendorChoice === 'Other (specify below)' ? newVendorName : vendorChoice;
  const vendorSlug = slugify(vendorName);
  const vendorPath = path.join(VENDORS_DIR, `${vendorSlug}.md`);
  const isNewVendor = !existsSync(vendorPath);

  const itemSlug = slugify(productName);
  const itemPath = path.join(ITEMS_DIR, `${itemSlug}.md`);
  const isNewItem = !existsSync(itemPath);

  const changedFiles: string[] = [];

  if (isNewVendor) {
    const vendorData: Vendor = { title: vendorName, order: maxVendorOrder() + 1, sources: [] };
    const check = vendorSchema.safeParse(vendorData);
    if (!check.success) {
      writeResult({ status: 'error', errors: check.error.issues.map((i) => i.message) });
      return;
    }
    writeContentFile(vendorPath, vendorData, `Exclusions specific for ${vendorName}.`);
    changedFiles.push(path.relative(ROOT, vendorPath));
  }

  let itemData: Item;
  let itemBody: string;
  let addedRowCount = normalizedRows.length;

  if (isNewItem) {
    itemData = {
      vendor: vendorSlug,
      title: productName,
      order: countItemsForVendor(vendorSlug) + 1,
      sources: [{ label: sourceLabel, url: sourceUrl }],
      notes: [],
      exclusions: normalizedRows,
      tags: [],
    };
    itemBody = introText || `Av exclusions for ${productName}.`;
  } else {
    const existing = splitFrontmatter(readFileSync(itemPath, 'utf8'));
    const existingItem = itemSchema.parse(existing.data);

    const existingRowKeys = new Set(existingItem.exclusions.map((r) => `${r.path}|${r.type}`));
    const newRows = normalizedRows.filter((r) => !existingRowKeys.has(`${r.path}|${r.type}`));
    addedRowCount = newRows.length;

    const existingSourceUrls = new Set(existingItem.sources.map((s) => s.url));
    const sources = existingSourceUrls.has(sourceUrl)
      ? existingItem.sources
      : [...existingItem.sources, { label: sourceLabel, url: sourceUrl }];

    itemData = {
      ...existingItem,
      sources,
      exclusions: [...existingItem.exclusions, ...newRows],
    };
    itemBody = existing.body;

    if (newRows.length === 0 && sources.length === existingItem.sources.length) {
      writeResult({
        status: 'error',
        errors: [
          `Every submitted row already exists on "${productName}" and the source URL is already listed - nothing new to add.`,
        ],
      });
      return;
    }
  }

  const itemCheck = itemSchema.safeParse(itemData);
  if (!itemCheck.success) {
    writeResult({ status: 'error', errors: itemCheck.error.issues.map((i) => i.message) });
    return;
  }

  writeContentFile(itemPath, itemData, itemBody);
  changedFiles.push(path.relative(ROOT, itemPath));

  const prTitle = isNewItem
    ? `Add exclusions: ${productName}`
    : `Update exclusions: ${productName} (+${addedRowCount} row${addedRowCount === 1 ? '' : 's'})`;

  const prBodyLines = [
    `Automated submission from #${issueNumber}.`,
    '',
    isNewVendor ? `- Created new vendor **${vendorName}**` : null,
    isNewItem ? `- Created new product **${productName}**` : `- Added rows to existing product **${productName}**`,
    !isNewItem && introText
      ? '- Note: submitted intro text was ignored because this product page already exists.'
      : null,
    '',
    'Please review before merging.',
  ].filter((line): line is string => line !== null);

  writeResult({
    status: 'ok',
    errors: [],
    vendorSlug,
    itemSlug,
    isNewItem,
    isNewVendor,
    changedFiles,
    prTitle,
    prBody: prBodyLines.join('\n'),
  });
}

main();
