'use client';

import Image from 'next/image';
import { useCart } from '@/context/hook';
import { Product } from '@/types/product';
import styles from './ProductCard.module.css';

type Props = {
  product: Product;
  inCart?: boolean;
};

export default function ProductCard({ product, inCart }: Props) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className={styles['product-card']}>
      <h2 className={`${styles['product-card__name']} ${inCart ? styles['in-cart'] : ''}`}>
        {product.name}
      </h2>
      <div className={styles['product-card__actions']}>
        <span
          className={`${styles['product-card__price']} ${
            isInCart && !inCart ? styles['in-cart-price'] : ''
          }`}
        >
          {product.price.toFixed(2)} €
        </span>
        {!inCart && (
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
        )}
      </div>
    </div>
  );
}
