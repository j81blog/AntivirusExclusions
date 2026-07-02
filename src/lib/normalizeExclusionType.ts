export type ExclusionTypeCategory = 'process' | 'file' | 'folder' | 'registry' | 'other';

const CATEGORY_LABEL: Record<ExclusionTypeCategory, string> = {
  process: 'Process',
  file: 'File',
  folder: 'Folder',
  registry: 'Registry',
  other: 'Other',
};

/**
 * Buckets a (normalized but still free-text) ExclusionType value into a
 * small set of categories used for badge coloring in the table UI, since
 * even after migration-time normalization the vocabulary includes
 * compound values like "File / Extension" or "File / Folder".
 */
export function categorizeExclusionType(type: string): ExclusionTypeCategory {
  const normalized = type.toLowerCase();
  if (normalized.includes('process')) return 'process';
  if (normalized.includes('registry')) return 'registry';
  if (normalized.includes('folder')) return 'folder';
  if (normalized.includes('file')) return 'file';
  return 'other';
}

export function exclusionTypeCategoryLabel(category: ExclusionTypeCategory): string {
  return CATEGORY_LABEL[category];
}
