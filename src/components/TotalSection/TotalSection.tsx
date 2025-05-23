'use client';

import { Product } from '@/types/product';
import styles from './TotalSection.module.css';

type TotalSectionProps = {
  cartItems: Product[];
  totalPrice: number;
};

export default function TotalSection({ cartItems, totalPrice }: TotalSectionProps) {
  return (
    <>
      <span className={styles['mobile-cart-bar__summary']}>
        <span className={styles['mobile-cart-bar__total-label']}>TOTAL</span>
        <span className={styles['mobile-cart-bar__products']}>({cartItems.length} productos)</span>
      </span>
      <span className={styles['mobile-cart-bar__total']}>{totalPrice.toFixed(2)} €</span>
    </>
  );
}
