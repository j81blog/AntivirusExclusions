/**
 * Experimental exports that turn exclusion rows into the format of a
 * specific antivirus product. Rows a product cannot express are never
 * dropped or guessed: they end up in a "check manually" list with the reason.
 */
import { platformOf } from './platform';

export interface ExportRow {
  path: string;
  type: string;
  condition?: string;
  itemTitle: string;
}

export interface ManualEntry {
  path: string;
  itemTitle: string;
  reason: string;
}

export interface ExportFormat {
  id: string;
  label: string;
  fileName: string;
  mime: string;
  build: (rows: ExportRow[]) => string;
}

/** Default value of each variable used on the site. `user` marks per-user variables. */
const VARIABLES: Record<string, { value: string; user?: boolean }> = {
  '%allusersprofile%': { value: 'C:\\ProgramData' },
  '%programdata%': { value: 'C:\\ProgramData' },
  '%programfiles%': { value: 'C:\\Program Files' },
  '%programfiles(x86)%': { value: 'C:\\Program Files (x86)' },
  '%commonprogramfiles%': { value: 'C:\\Program Files\\Common Files' },
  '%commonprogramfiles(x86)%': { value: 'C:\\Program Files (x86)\\Common Files' },
  '%systemroot%': { value: 'C:\\Windows' },
  '%windir%': { value: 'C:\\Windows' },
  '%systemdrive%': { value: 'C:' },
  '%public%': { value: 'C:\\Users\\Public' },
  '%userprofile%': { value: 'C:\\Users\\*', user: true },
  '%appdata%': { value: 'C:\\Users\\*\\AppData\\Roaming', user: true },
  '%localappdata%': { value: 'C:\\Users\\*\\AppData\\Local', user: true },
  '%temp%': { value: 'C:\\Users\\*\\AppData\\Local\\Temp', user: true },
  '%tmp%': { value: 'C:\\Users\\*\\AppData\\Local\\Temp', user: true },
  '%username%': { value: '*', user: true },
};

/** Variables Microsoft Defender expands itself (system context). */
const DEFENDER_VARIABLES = new Set([
  '%allusersprofile%', '%programdata%', '%programfiles%', '%programfiles(x86)%', '%commonprogramfiles%',
  '%commonprogramfiles(x86)%', '%systemroot%', '%windir%', '%systemdrive%', '%public%',
]);

/** Variables Trend Micro Apex One accepts, in the directory list only. */
const APEX_VARIABLES = new Set([
  '%allusersprofile%', '%commonprogramfiles(x86)%', '%programfiles%', '%programfiles(x86)%', '%systemroot%', '%windir%',
]);

type Kind = 'path' | 'folder' | 'process' | 'extension';

interface Parsed {
  kinds: Kind[];
  /** The row path, with folder placeholders replaced by `*`. */
  path: string;
  wildcarded?: boolean;
  extension?: string;
  problem?: string;
}

const PLACEHOLDER = /<[^>]+>/g;

function parse(row: ExportRow): Parsed {
  let path = row.path;
  if (platformOf(path) !== 'windows') return { kinds: [], path, problem: 'Not a Windows path' };
  if (row.type === 'Registry') return { kinds: [], path, problem: 'Registry exclusion: not supported by these exports' };
  let wildcarded = false;
  if (/<[^>]+>/.test(path)) {
    // A placeholder inside a local path (for example <ProductGUID> or <Version###>) stands for
    // any folder name, so `*` matches it. A placeholder in the first segment or in a UNC path
    // (drive, server, share) needs the admin's own value.
    const first = path.split('\\')[0];
    if (path.startsWith('\\\\') || /<[^>]+>/.test(first)) {
      return { kinds: [], path, problem: 'Contains a placeholder that needs your own value' };
    }
    path = path.replace(PLACEHOLDER, '*');
    wildcarded = true;
  }
  const base = { path, wildcarded };
  const ext = /^\*\.([A-Za-z0-9_-]+)$/.exec(path);
  if (row.type === 'File / Extension' && ext) return { ...base, kinds: ['extension'], extension: ext[1] };
  switch (row.type) {
    case 'Process':
      return { ...base, kinds: ['process'] };
    case 'File / Process':
      return { ...base, kinds: ['path', 'process'] };
    case 'Folder':
    case 'File / Folder':
      return { ...base, kinds: ['folder'] };
    default:
      return { ...base, kinds: ['path'] };
  }
}

/** Replaces variables; `keep` lists the variables the product expands itself. */
function resolve(path: string, keep: Set<string>): { value: string; unknown?: string } {
  let unknown: string | undefined;
  const value = path.replace(/%[^%\\]+%/g, (name) => {
    const key = name.toLowerCase();
    if (keep.has(key)) return name;
    const known = VARIABLES[key];
    if (!known) {
      unknown = name;
      return name;
    }
    return known.value;
  });
  return { value: value.replace(/\\+$/, ''), unknown };
}

function hasWildcard(value: string) {
  return /[*?]/.test(value);
}

class Collector {
  lists = new Map<string, Map<string, string>>();
  manual: ManualEntry[] = [];
  wildcarded: ManualEntry[] = [];
  constructor(names: string[]) {
    for (const n of names) this.lists.set(n, new Map());
  }
  add(list: string, value: string) {
    const map = this.lists.get(list)!;
    if (!map.has(value.toLowerCase())) map.set(value.toLowerCase(), value);
  }
  skip(row: ExportRow, reason: string) {
    this.manual.push({ path: row.path, itemTitle: row.itemTitle, reason });
  }
  noteWildcard(row: ExportRow, p: Parsed) {
    if (p.wildcarded) this.wildcarded.push({ path: row.path, itemTitle: row.itemTitle, reason: `written as ${p.path}` });
  }
  values(list: string) {
    return [...this.lists.get(list)!.values()];
  }
}

const HEADER = (product: string) =>
  [
    `Experimental ${product} export generated by https://ave.j81.nl`,
    'Review every entry before you apply it. Paths use default install locations.',
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
  ];

function manualText(c: Collector, comment = '') {
  const out: string[] = [];
  if (c.wildcarded.length > 0) {
    out.push('', `${comment}Placeholder replaced by * (check that this matches your setup) (${c.wildcarded.length}):`,
      ...c.wildcarded.map((m) => `${comment}  ${m.path}  [${m.itemTitle}]  ${m.reason}`));
  }
  if (c.manual.length > 0) {
    out.push('', `${comment}Check manually (${c.manual.length}):`,
      ...c.manual.map((m) => `${comment}  ${m.path}  [${m.itemTitle}]  ${m.reason}`));
  }
  return out;
}

function textLists(product: string, c: Collector, sections: [string, string][], notes: string[] = []) {
  const out = [...HEADER(product), ...notes];
  for (const [list, title] of sections) {
    const values = c.values(list);
    out.push('', `${title} (${values.length}):`, ...values);
  }
  return [...out, ...manualText(c)].join('\r\n') + '\r\n';
}

// ---------------- Microsoft Defender ----------------

function collectDefender(rows: ExportRow[]) {
  const c = new Collector(['path', 'process', 'extension']);
  for (const row of rows) {
    const p = parse(row);
    if (p.problem) {
      c.skip(row, p.problem);
      continue;
    }
    const { value, unknown } = resolve(p.path, DEFENDER_VARIABLES);
    if (unknown) {
      c.skip(row, `Unknown variable ${unknown}`);
      continue;
    }
    if ((value.match(/[*?]/g) ?? []).length > 6) {
      c.skip(row, 'More than 6 wildcards (Defender limit)');
      continue;
    }
    c.noteWildcard(row, p);
    for (const kind of p.kinds) {
      if (kind === 'extension') c.add('extension', `.${p.extension}`);
      else if (kind === 'process') c.add('process', value);
      else c.add('path', value);
    }
  }
  return c;
}

function psList(name: string, values: string[]) {
  if (values.length === 0) return [`$${name} = @()`];
  return [`$${name} = @(`, ...values.map((v) => `    '${v.replace(/'/g, "''")}'`), ')'];
}

const defenderPowerShell: ExportFormat = {
  id: 'defender-ps1',
  label: 'Microsoft Defender (PowerShell)',
  fileName: 'defender-exclusions.ps1',
  mime: 'text/plain',
  build(rows) {
    const c = collectDefender(rows);
    const lines = [
      ...HEADER('Microsoft Defender').map((l) => `# ${l}`),
      '# Run in an elevated PowerShell session. Per-user variables are written as C:\\Users\\*\\...,',
      '# because Defender runs as SYSTEM and would resolve them to the SYSTEM profile.',
      '#Requires -RunAsAdministrator',
      '',
      ...psList('paths', c.values('path')),
      ...psList('processes', c.values('process')),
      ...psList('extensions', c.values('extension')),
      '',
      'if ($paths) { Add-MpPreference -ExclusionPath $paths }',
      'if ($processes) { Add-MpPreference -ExclusionProcess $processes }',
      'if ($extensions) { Add-MpPreference -ExclusionExtension $extensions }',
      ...manualText(c, '# '),
    ];
    return lines.join('\r\n') + '\r\n';
  },
};

const defenderLists: ExportFormat = {
  id: 'defender-lists',
  label: 'Microsoft Defender (Intune / GPO lists)',
  fileName: 'defender-exclusions.txt',
  mime: 'text/plain',
  build(rows) {
    return textLists('Microsoft Defender', collectDefender(rows), [
      ['path', 'Excluded paths'],
      ['process', 'Excluded processes'],
      ['extension', 'Excluded extensions'],
    ], ['Paste each list into the matching Intune or Group Policy exclusion setting.']);
  },
};

// ---------------- ESET ----------------

const eset: ExportFormat = {
  id: 'eset',
  label: 'ESET (performance exclusions)',
  fileName: 'eset-exclusions.txt',
  mime: 'text/plain',
  build(rows) {
    const c = new Collector(['path', 'process']);
    for (const row of rows) {
      const p = parse(row);
      if (p.problem) {
        c.skip(row, p.problem);
        continue;
      }
      c.noteWildcard(row, p);
      const { value, unknown } = resolve(p.path, new Set());
      if (unknown) {
        c.skip(row, `Unknown variable ${unknown}`);
        continue;
      }
      for (const kind of p.kinds) {
        if (kind === 'process') {
          c.add('process', value);
          continue;
        }
        const entry = kind === 'folder' ? `${value}\\*` : kind === 'extension' ? `*.${p.extension}` : value;
        const folderPart = entry.slice(0, entry.lastIndexOf('\\'));
        if (hasWildcard(folderPart)) {
          c.skip(row, 'Wildcard in the middle of the path is not officially supported by ESET performance exclusions');
          continue;
        }
        c.add('path', entry);
      }
    }
    return textLists('ESET', c, [
      ['path', 'Performance exclusions'],
      ['process', 'Process exclusions (verify in your ESET version)'],
    ], ['Variables are expanded to default paths. Folders end in \\* so their contents are excluded.']);
  },
};

// ---------------- Trend Micro ----------------

const apexOne: ExportFormat = {
  id: 'apex-one',
  label: 'Trend Micro Apex One (scan exclusion lists)',
  fileName: 'apex-one-exclusions.txt',
  mime: 'text/plain',
  build(rows) {
    const c = new Collector(['dir', 'file', 'ext']);
    for (const row of rows) {
      const p = parse(row);
      if (p.problem) {
        c.skip(row, p.problem);
        continue;
      }
      c.noteWildcard(row, p);
      for (const kind of p.kinds) {
        if (kind === 'process') {
          c.skip(row, 'Apex One scan exclusions have no process list');
          continue;
        }
        if (kind === 'extension') {
          c.add('ext', p.extension!);
          continue;
        }
        if (kind === 'folder') {
          const { value, unknown } = resolve(p.path, APEX_VARIABLES);
          if (unknown) c.skip(row, `Unknown variable ${unknown}`);
          else c.add('dir', `${value}\\`);
          continue;
        }
        const { value, unknown } = resolve(p.path, new Set());
        if (unknown) c.skip(row, `Unknown variable ${unknown}`);
        else if (hasWildcard(value)) c.skip(row, 'Wildcards in the file list are not documented for Apex One');
        else c.add('file', value);
      }
    }
    return textLists('Trend Micro Apex One', c, [
      ['dir', 'Directories'],
      ['file', 'Files'],
      ['ext', 'File extensions'],
    ], ['Each list holds up to 256 entries. Real-time scan does not support wildcards in extensions.']);
  },
};

const deepSecurity: ExportFormat = {
  id: 'deep-security',
  label: 'Trend Micro Deep Security / Vision One (lists)',
  fileName: 'deep-security-exclusions.txt',
  mime: 'text/plain',
  build(rows) {
    const c = new Collector(['dir', 'file', 'ext', 'process']);
    for (const row of rows) {
      const p = parse(row);
      if (p.problem) {
        c.skip(row, p.problem);
        continue;
      }
      c.noteWildcard(row, p);
      const { value, unknown } = resolve(p.path, new Set());
      if (unknown) {
        c.skip(row, `Unknown variable ${unknown}`);
        continue;
      }
      for (const kind of p.kinds) {
        if (kind === 'extension') c.add('ext', p.extension!);
        else if (kind === 'process') c.add('process', value);
        else if (kind === 'folder') c.add('dir', `${value}\\`);
        else c.add('file', value);
      }
    }
    return textLists('Trend Micro Deep Security / Vision One', c, [
      ['dir', 'Directory list'],
      ['file', 'File list'],
      ['ext', 'File extension list'],
      ['process', 'Process image file list'],
    ], ['Variables are expanded to default paths.']);
  },
};

export const exportFormats: ExportFormat[] = [defenderPowerShell, defenderLists, eset, apexOne, deepSecurity];
