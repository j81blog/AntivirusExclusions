import { useStore } from '@nanostores/preact';
import { cartStore, removeRowFromCart, clearCart, type CartItem } from '../stores/cart';

function downloadBlob(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function toCsv(items: CartItem[]): string {
  const header = ['Product', 'Exclusion', 'Type', 'Description', 'Justification'];
  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;
  const rows = items.map((item) =>
    [item.itemTitle, item.path, item.type, item.description, item.justification]
      .map(escape)
      .join(','),
  );
  return [header.join(','), ...rows].join('\r\n');
}

async function toPdf(items: CartItem[]) {
  const { jsPDF } = await import('jspdf');
  const { autoTable } = await import('jspdf-autotable');
  const doc = new jsPDF({ orientation: 'landscape' });
  doc.setFontSize(14);
  doc.text('AV exclusions - selected items', 14, 14);
  autoTable(doc, {
    startY: 20,
    head: [['Product', 'Exclusion', 'Type', 'Description', 'Justification']],
    body: items.map((item) => [item.itemTitle, item.path, item.type, item.description, item.justification]),
    styles: { fontSize: 8 },
  });
  doc.save('av-exclusions-selection.pdf');
}

export default function CartPage() {
  const items = useStore(cartStore);

  if (items.length === 0) {
    return (
      <div class="cart-empty">
        <p>Your selection is empty. Browse a product and check the exclusions you need, then use "Add selected to cart".</p>
        <a href="/" class="button">Browse products</a>
      </div>
    );
  }

  return (
    <div>
      <div class="cart-toolbar">
        <p class="cart-count">{items.length} exclusion{items.length === 1 ? '' : 's'} selected</p>
        <div class="cart-actions">
          <button onClick={() => downloadBlob('av-exclusions-selection.csv', toCsv(items), 'text/csv')}>
            Download CSV
          </button>
          <button onClick={() => toPdf(items)}>Download PDF</button>
          <button
            onClick={() =>
              downloadBlob('av-exclusions-selection.json', JSON.stringify(items, null, 2), 'application/json')
            }
          >
            Download JSON
          </button>
          <button onClick={() => clearCart()}>Clear selection</button>
        </div>
      </div>

      <div class="cart-table-wrap">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Exclusion</th>
              <th>Type</th>
              <th>Description</th>
              <th>Justification</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <a href={`/items/${item.itemSlug}/`}>{item.itemTitle}</a>
                </td>
                <td class="mono">{item.path}</td>
                <td>{item.type}</td>
                <td>{item.description || '—'}</td>
                <td>{item.justification || '—'}</td>
                <td>
                  <button aria-label="Remove" onClick={() => removeRowFromCart(item.id)}>
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
