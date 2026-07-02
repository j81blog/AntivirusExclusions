import { useStore } from '@nanostores/preact';
import { cartCount } from '../stores/cart';

export default function CartBadge() {
  const count = useStore(cartCount);

  if (count === 0) {
    return null;
  }

  return <span class="cart-badge">{count}</span>;
}
