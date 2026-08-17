import type { Exclusion } from './contentSchemas';

/** Canonical row order for stored items: type A-Z, then path A-Z. */
export function sortExclusions(rows: Exclusion[]): Exclusion[] {
  return [...rows].sort((a, b) => a.type.localeCompare(b.type) || a.path.localeCompare(b.path));
}
