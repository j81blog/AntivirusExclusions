import { useEffect, useRef, useState } from 'preact/hooks';
import { TabulatorFull as Tabulator, type CellComponent, type RowComponent } from 'tabulator-tables';
import { jsPDF } from 'jspdf';
import { applyPlugin } from 'jspdf-autotable';
import { addRowsToCart } from '../stores/cart';
import { categorizeExclusionType } from '../lib/normalizeExclusionType';
import { platformLabel, type Platform } from '../lib/platform';

applyPlugin(jsPDF);

export interface ExclusionRow {
  id: string;
  path: string;
  type: string;
  description: string;
  justification: string;
  condition: string;
  status: 'current' | 'legacy';
  source: string;
  sourceLabel: string;
  platform: Platform;
}

interface Props {
  itemSlug: string;
  itemTitle: string;
  rows: ExclusionRow[];
  /** Show the Source column (items with more than one source). */
  showSource?: boolean;
}

function typeBadgeFormatter(cell: CellComponent) {
  const value = String(cell.getValue() ?? '');
  const category = categorizeExclusionType(value);
  const span = document.createElement('span');
  span.className = `type-badge type-badge-${category}`;
  span.textContent = value;
  return span;
}

function pathFormatter(cell: CellComponent) {
  const wrap = document.createElement('span');
  const data = cell.getRow().getData() as ExclusionRow;
  if (data.platform !== 'windows') {
    const badge = document.createElement('span');
    badge.className = 'platform-badge';
    badge.textContent = platformLabel[data.platform];
    wrap.append(badge, ' ');
  }
  const code = document.createElement('code');
  code.textContent = String(cell.getValue() ?? '');
  // Badge goes first so long, truncated paths can't hide it.
  if ((cell.getRow().getData() as ExclusionRow).status === 'legacy') {
    const badge = document.createElement('span');
    badge.className = 'legacy-badge';
    badge.textContent = 'Legacy';
    badge.title = 'Only for older product versions';
    wrap.append(badge, ' ');
  }
  wrap.append(code);
  return wrap;
}

function sourceFormatter(cell: CellComponent) {
  const data = cell.getRow().getData() as ExclusionRow;
  if (!data.source) return '—';
  const link = document.createElement('a');
  link.href = data.source;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = data.sourceLabel || data.source;
  return link;
}

function emptyDashFormatter(cell: CellComponent) {
  const value = cell.getValue();
  return value ? String(value) : '—';
}

const exportColumns = [
  { field: 'path', title: 'Exclusion' },
  { field: 'type', title: 'Type' },
  { field: 'condition', title: 'Applies when' },
  { field: 'description', title: 'Description' },
  { field: 'justification', title: 'Justification' },
  { field: 'status', title: 'Status' },
  { field: 'source', title: 'Source' },
];

export default function ExclusionTable({ itemSlug, itemTitle, rows, showSource = false }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<Tabulator | null>(null);
  const filterTextRef = useRef('');
  const [showLegacy, setShowLegacy] = useState(false);
  const showLegacyRef = useRef(showLegacy);
  const legacyCount = rows.filter((row) => row.status === 'legacy').length;

  const applyFilters = () => {
    const table = tableRef.current;
    if (!table) return;
    const text = filterTextRef.current;
    const includeLegacy = showLegacyRef.current;
    table.setFilter((data: ExclusionRow) => {
      if (!includeLegacy && data.status === 'legacy') return false;
      if (!text) return true;
      return [data.path, data.type, data.condition, data.description, data.justification, data.sourceLabel].some((field) =>
        field.toLowerCase().includes(text),
      );
    });
  };

  useEffect(() => {
    if (!elRef.current) return;

    const table = new Tabulator(elRef.current, {
      data: rows,
      index: 'id',
      layout: 'fitColumns',
      selectableRows: true,
      dependencies: { jspdf: { jsPDF } },
      rowFormatter: (row: RowComponent) => {
        row.getElement().classList.toggle('row-legacy', (row.getData() as ExclusionRow).status === 'legacy');
      },
      columns: [
        {
          title: '',
          formatter: 'rowSelection',
          titleFormatter: 'rowSelection',
          hozAlign: 'center',
          headerSort: false,
          width: 36,
          download: false,
          cellClick: (_e, cell) => cell.getRow().toggleSelect(),
        },
        { title: 'Exclusion', field: 'path', widthGrow: 3, formatter: pathFormatter },
        { title: 'Type', field: 'type', widthGrow: 1, formatter: typeBadgeFormatter },
        { title: 'Applies when', field: 'condition', widthGrow: 2, formatter: emptyDashFormatter },
        { title: 'Description', field: 'description', widthGrow: 2, formatter: emptyDashFormatter },
        { title: 'Justification', field: 'justification', widthGrow: 2, formatter: emptyDashFormatter },
        { title: 'Status', field: 'status', visible: false, download: true },
        { title: 'Source', field: 'source', widthGrow: 2, formatter: sourceFormatter, visible: showSource, download: true },
      ],
    });

    tableRef.current = table;
    table.on('tableBuilt', applyFilters);

    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, [rows]);

  const handleFilterInput = (event: Event) => {
    filterTextRef.current = (event.currentTarget as HTMLInputElement).value.trim().toLowerCase();
    applyFilters();
  };

  const handleLegacyToggle = (event: Event) => {
    const checked = (event.currentTarget as HTMLInputElement).checked;
    showLegacyRef.current = checked;
    setShowLegacy(checked);
    applyFilters();
  };

  // Downloads cover the rows currently shown, so hidden legacy rows stay out.
  const downloadCsv = () => tableRef.current?.download('csv', `${itemSlug}.csv`);
  const downloadJson = () => tableRef.current?.download('json', `${itemSlug}.json`);
  const downloadPdf = () =>
    tableRef.current?.download('pdf', `${itemSlug}.pdf`, {
      orientation: 'landscape',
      title: itemTitle,
      columns: exportColumns,
    } as never);

  const addSelectedToCart = () => {
    const table = tableRef.current;
    if (!table) return;
    const selected = table.getSelectedData() as ExclusionRow[];
    if (selected.length === 0) return;
    addRowsToCart(itemSlug, itemTitle, selected);
    table.deselectRow();
  };

  return (
    <div>
      <div class="table-toolbar">
        <div class="table-filter">
          <input type="text" placeholder="Filter exclusions" onInput={handleFilterInput} />
        </div>
        {legacyCount > 0 && (
          <label class="legacy-toggle">
            <input type="checkbox" checked={showLegacy} onChange={handleLegacyToggle} />
            Show legacy ({legacyCount})
          </label>
        )}
        <button onClick={downloadCsv}>Download CSV</button>
        <button onClick={downloadPdf}>Download PDF</button>
        <button onClick={downloadJson}>Download JSON</button>
        <button class="button-accent" onClick={addSelectedToCart}>
          Add to downloads
        </button>
      </div>
      <div ref={elRef}></div>
    </div>
  );
}
