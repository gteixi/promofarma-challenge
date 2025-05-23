'use client';

import { useCart } from '@/context/CartContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './MobileCartBar.module.css';
import TotalSection from '../TotalSection/TotalSection';

export default function MobileCartBar() {
  const { cartItems, totalPrice } = useCart();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!isMobile) return null;

  return (
    <footer className={styles['mobile-cart-bar']}>
      <div className={styles['mobile-cart-bar__row']}>
        <span className={styles['mobile-cart-bar__label']}>MI CESTA:</span>
      </div>
      <div className={styles['mobile-cart-bar__divider']} />
      <div className={styles['mobile-cart-bar__row']}>
        <TotalSection cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </footer>
  );
}
