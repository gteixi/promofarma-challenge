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
      <span className={styles['total-section__summary']}>
        <span className={styles['total-section__total-label']}>Total</span>
        <span className={styles['total-section__products']}>({cartItems.length} productos)</span>
      </span>
      <span className={styles['total-section__total']}>{totalPrice.toFixed(2)} €</span>
    </>
  );
}
