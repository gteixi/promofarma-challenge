'use client';

import { useCart } from '@/context/CartContext';
import styles from './Cart.module.css';
import Image from 'next/image';

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <aside className={styles['cart']}>
      <h2 className={styles['cart__title']}>MI CESTA:</h2>

      <ul className={styles['cart__list']}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles['cart__item']}>
            <Image
              src={item.image}
              alt={item.name}
              className={styles['cart__image']}
              width={50}
              height={50}
            />
            <span className={styles['cart__name']}>{item.name}</span>
            <span className={styles['cart__price']}>{item.price.toFixed(2)} €</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
