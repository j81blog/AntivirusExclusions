import { createHash } from 'node:crypto';

/**
 * Stable id for one exclusion row, survives row reordering and edits to
 * description/justification. Only changes if the exclusion's path or type
 * text itself changes, which is the correct invalidation behavior for
 * cart entries pointing at this row.
 */
export function rowId(itemSlug: string, path: string, type: string): string {
  const hash = createHash('sha256').update(`${path}|${type}`).digest('hex').slice(0, 8);
  return `${itemSlug}:${hash}`;
}
