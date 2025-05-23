'use client';

import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

import Image from 'next/image';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div>
      <span>{product.name}</span>
      <div>
        <span>{product.price.toFixed(2)} €</span>
        <button onClick={() => (isInCart ? removeFromCart(product.id) : addToCart(product))}>
          <Image
            src="/icons/add-to-cart.png"
            alt={isInCart ? 'Remove from cart' : 'Add to cart'}
            width={42}
            height={25}
            style={isInCart ? { transform: 'rotate(45deg)' } : {}}
          />
        </button>
      </div>
    </div>
  );
}
