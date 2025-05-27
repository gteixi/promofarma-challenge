'use client';

import Image from 'next/image';
import { useCart } from '@/context/hook';
import { Product } from '@/types/product';
import styles from './ProductCard.module.css';

type Props = {
  product: Product;
  showInCart?: boolean;
};

export default function ProductCard({ product, showInCart }: Props) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className={styles['product-card']}>
      {showInCart && (
        <Image
          src={product.image}
          alt={product.name}
          className={styles['product-card__image']}
          width={50}
          height={50}
        />
      )}
      <h2 className={`${styles['product-card__name']} ${showInCart ? styles['in-cart'] : ''}`}>
        {product.name}
      </h2>

      <div className={styles['product-card__actions']}>
        <span
          className={`${styles['product-card__price']} ${
            isInCart && !showInCart ? styles['in-cart-price'] : ''
          }`}
        >
          {product.price.toFixed(2)} €
        </span>
        {!showInCart && (
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
