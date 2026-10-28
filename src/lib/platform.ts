export type Platform = 'windows' | 'macos' | 'linux';

/** Works out the platform from the path: '/Library/...' is macOS, other '/...' paths are Linux. */
export function platformOf(path: string): Platform {
  if (!path.startsWith('/')) return 'windows';
  return path.startsWith('/Library/') ? 'macos' : 'linux';
}

export const platformLabel: Record<Platform, string> = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
};
