'use client';

import ProductList from '@/components/ProductList/ProductList';
import Cart from '@/components/Cart/Cart';
import styles from './page.module.css';
import MobileCartBar from '@/components/MobileCartBar/MobileCartBar';

export default function HomePage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.page__title}>Promofarma Challenge</h1>

      <div className={styles.page__content}>
        <section className={styles.page__products}>
          <ProductList />
        </section>

        <aside className={styles.page__cart}>
          <Cart />
        </aside>
        <MobileCartBar />
      </div>
    </main>
  );
}
