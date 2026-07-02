import { useEffect, useRef } from 'preact/hooks';
import { TabulatorFull as Tabulator, type CellComponent } from 'tabulator-tables';
import { jsPDF } from 'jspdf';
import { applyPlugin } from 'jspdf-autotable';
import { addRowsToCart } from '../stores/cart';
import { categorizeExclusionType } from '../lib/normalizeExclusionType';

applyPlugin(jsPDF);

export interface ExclusionRow {
  id: string;
  path: string;
  type: string;
  description: string;
  justification: string;
}

interface Props {
  itemSlug: string;
  itemTitle: string;
  rows: ExclusionRow[];
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
  const code = document.createElement('code');
  code.textContent = String(cell.getValue() ?? '');
  return code;
}

function emptyDashFormatter(cell: CellComponent) {
  const value = cell.getValue();
  return value ? String(value) : '—';
}

const exportColumns = [
  { field: 'path', title: 'Exclusion' },
  { field: 'type', title: 'Type' },
  { field: 'description', title: 'Description' },
  { field: 'justification', title: 'Justification' },
];

export default function ExclusionTable({ itemSlug, itemTitle, rows }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<Tabulator | null>(null);

  useEffect(() => {
    if (!elRef.current) return;

    const table = new Tabulator(elRef.current, {
      data: rows,
      index: 'id',
      layout: 'fitColumns',
      selectableRows: true,
      dependencies: { jspdf: { jsPDF } },
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
        { title: 'Description', field: 'description', widthGrow: 2, formatter: emptyDashFormatter },
        { title: 'Justification', field: 'justification', widthGrow: 2, formatter: emptyDashFormatter },
      ],
    });

    tableRef.current = table;

    return () => {
      table.destroy();
      tableRef.current = null;
    };
  }, [rows]);

  const handleFilterInput = (event: Event) => {
    const value = (event.currentTarget as HTMLInputElement).value.trim().toLowerCase();
    const table = tableRef.current;
    if (!table) return;

    if (!value) {
      table.clearFilter(false);
      return;
    }

    table.setFilter((data: ExclusionRow) =>
      [data.path, data.type, data.description, data.justification].some((field) =>
        field.toLowerCase().includes(value),
      ),
    );
  };

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
        <button onClick={downloadCsv}>Download CSV</button>
        <button onClick={downloadPdf}>Download PDF</button>
        <button onClick={downloadJson}>Download JSON</button>
        <button class="button-accent" onClick={addSelectedToCart}>
          Add selected to cart
        </button>
      </div>
      <div ref={elRef}></div>
    </div>
  );
}
