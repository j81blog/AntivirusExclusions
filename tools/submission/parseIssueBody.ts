export type ParsedIssueFields = Record<string, string>;

/**
 * GitHub renders a submitted issue-form body as repeated
 * `### <field label>\n\n<value>\n\n` blocks, with unanswered optional
 * fields rendered as the literal text `_No response_`. This parses that
 * back into a label -> value map.
 */
export function parseIssueBody(body: string): ParsedIssueFields {
  const fields: ParsedIssueFields = {};
  const headerRegex = /^### (.+)$/gm;
  const matches = [...body.matchAll(headerRegex)];

  for (let i = 0; i < matches.length; i++) {
    const label = matches[i][1].trim();
    const start = matches[i].index! + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : body.length;
    let value = body.slice(start, end).trim();
    if (value === '_No response_') value = '';
    fields[label] = value;
  }

  return fields;
}

export function getField(fields: ParsedIssueFields, label: string): string {
  return fields[label] ?? '';
}

export interface RawExclusionRow {
  path: string;
  type: string;
  description: string;
  justification: string;
}

const HEADER_ROW = 'path;type;description;justification';

/**
 * The Exclusions field is declared `render: text`, so GitHub wraps its value
 * in a fenced code block when it renders the issue body. Without this the
 * fence lines get parsed as exclusions and every submission fails with a
 * "type is required" error on the first and last row.
 */
function stripCodeFence(raw: string): string {
  const lines = raw.split(/\r?\n/);
  if (!lines[0]?.trimStart().startsWith('```')) return raw;

  lines.shift();
  if (lines[lines.length - 1]?.trim() === '```') lines.pop();
  return lines.join('\n');
}

/** Parses the `path;type;description;justification` textarea, one row per line. */
export function parseExclusionRows(raw: string): RawExclusionRow[] {
  const lines = stripCodeFence(raw)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  // The field description spells the column names out, so submitters
  // reasonably paste them as a header row. Treat that as a header.
  if (lines[0]?.toLowerCase().replace(/\s+/g, '') === HEADER_ROW) lines.shift();

  return lines.map((line) => {
    const parts = line.split(';');
    return {
      path: (parts[0] ?? '').trim(),
      type: (parts[1] ?? '').trim(),
      description: (parts[2] ?? '').trim(),
      justification: (parts[3] ?? '').trim(),
    };
  });
}

/** Checks whether a rendered checkboxes field's option is checked (`- [X] ...`). */
export function isChecked(fieldValue: string): boolean {
  return /^- \[[xX]\]/m.test(fieldValue);
}
