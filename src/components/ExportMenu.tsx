import { useEffect, useRef, useState } from 'preact/hooks';
import { exportFormats, type ExportRow } from '../lib/avExport';

export interface FileAction {
  label: string;
  run: () => void;
}

interface Props {
  /** CSV, PDF and JSON downloads. */
  fileActions: FileAction[];
  /** Rows for the antivirus exports, read when an option is clicked. */
  getAvRows: () => ExportRow[];
  /** Prefix for antivirus export file names, e.g. the item slug. */
  filePrefix?: string;
}

function downloadText(fileName: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

const downloadIcon = (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

export default function ExportMenu({ fileActions, getAvRows, filePrefix }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const exportAv = (formatId: string) => {
    const format = exportFormats.find((f) => f.id === formatId);
    const rows = getAvRows();
    setOpen(false);
    if (!format || rows.length === 0) return;
    downloadText(filePrefix ? `${filePrefix}-${format.fileName}` : format.fileName, format.build(rows), format.mime);
  };

  return (
    <div class="export-menu" ref={rootRef}>
      <button class="button-accent" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        {downloadIcon}
        Export
        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div class="export-menu-panel" role="menu">
          <span class="export-menu-heading">Files</span>
          {fileActions.map((action) => (
            <button role="menuitem" class="export-menu-item" onClick={() => { setOpen(false); action.run(); }}>
              {action.label}
            </button>
          ))}
          <div class="export-menu-divider" />
          <div class="export-menu-heading export-menu-heading-row">
            <span>Antivirus</span>
            <span class="experimental-badge" title="Generated for each product's syntax. Review every entry before you apply it.">
              Experimental
            </span>
          </div>
          {exportFormats.map((format) => (
            <button role="menuitem" class="export-menu-item" onClick={() => exportAv(format.id)}>
              {format.label}
            </button>
          ))}
          <p class="export-menu-hint">Rows a product can't express are listed under "Check manually" in the file.</p>
        </div>
      )}
    </div>
  );
}
