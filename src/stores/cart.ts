import { computed } from 'nanostores';
import { persistentJSON } from '@nanostores/persistent';

export interface CartItem {
  id: string;
  itemSlug: string;
  itemTitle: string;
  path: string;
  type: string;
  description: string;
  justification: string;
  addedAt: string;
}

export interface CartRowInput {
  id: string;
  path: string;
  type: string;
  description: string;
  justification: string;
}

/**
 * Snapshot-based cart: each entry captures the row's display fields at the
 * time it was added, not just a reference. Content collections only exist
 * at build time, so the cart can't re-resolve data client-side - storing
 * the snapshot lets the cart page render/export immediately and keeps
 * working even if the source item is later edited or removed.
 */
export const cartStore = persistentJSON<CartItem[]>('ave-cart', []);

export const cartCount = computed(cartStore, (items) => items.length);

export function addRowsToCart(itemSlug: string, itemTitle: string, rows: CartRowInput[]): void {
  const existing = cartStore.get();
  const existingIds = new Set(existing.map((item) => item.id));
  const addedAt = new Date().toISOString();

  const additions = rows
    .filter((row) => !existingIds.has(row.id))
    .map((row) => ({
      id: row.id,
      itemSlug,
      itemTitle,
      path: row.path,
      type: row.type,
      description: row.description,
      justification: row.justification,
      addedAt,
    }));

  if (additions.length > 0) {
    cartStore.set([...existing, ...additions]);
  }
}

export function removeRowFromCart(id: string): void {
  cartStore.set(cartStore.get().filter((item) => item.id !== id));
}

export function clearCart(): void {
  cartStore.set([]);
}
