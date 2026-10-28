import { useState } from 'preact/hooks';
import { exportFormats, type ExportRow } from '../lib/avExport';

interface Props {
  /** Returns the rows to export at the moment the button is clicked. */
  getRows: () => ExportRow[];
  /** Prefix for the file name, e.g. the item slug. */
  filePrefix?: string;
}

export default function AvExport({ getRows, filePrefix }: Props) {
  const [formatId, setFormatId] = useState(exportFormats[0].id);

  const download = () => {
    const format = exportFormats.find((f) => f.id === formatId) ?? exportFormats[0];
    const rows = getRows();
    if (rows.length === 0) return;
    const blob = new Blob([format.build(rows)], { type: format.mime });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filePrefix ? `${filePrefix}-${format.fileName}` : format.fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div class="av-export">
      <span class="experimental-badge" title="Generated for each product's syntax. Review every entry before you apply it.">
        Experimental
      </span>
      <label class="av-export-label">
        Export for
        <select value={formatId} onChange={(e) => setFormatId((e.currentTarget as HTMLSelectElement).value)}>
          {exportFormats.map((f) => (
            <option value={f.id}>{f.label}</option>
          ))}
        </select>
      </label>
      <button onClick={download}>Download</button>
    </div>
  );
}
