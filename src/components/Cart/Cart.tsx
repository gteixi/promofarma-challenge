'use client';

import { useCart } from '@/context/hook';
import TotalSection from '../TotalSection/TotalSection';
import styles from './Cart.module.css';
import ProductCard from '../ProductCard/ProductCard';

export default function Cart() {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className={styles['cart']}>
      <h2 className={styles['cart__title']}>Mi Cesta:</h2>

      <ul className={styles['cart__list']}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles['cart__item']}>
            <ProductCard product={item} showInCart />
          </li>
        ))}
      </ul>
      <div className={styles['total__container']}>
        <TotalSection cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
