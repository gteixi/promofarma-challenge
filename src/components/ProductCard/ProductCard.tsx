'use client';

import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

import Image from 'next/image';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className={styles['product-card']}>
      <span className={styles['product-card__name']}>{product.name}</span>
      <div className={styles['product-card__actions']}>
        <span
          className={`${styles['product-card__price']} ${isInCart ? styles['in-cart-price'] : ''}`}
        >
          {product.price.toFixed(2)} €
        </span>
        <button
          className={`${styles['product-card__button']} ${isInCart ? styles['in-cart'] : ''}`}
          onClick={() => (isInCart ? removeFromCart(product.id) : addToCart(product))}
        >
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
