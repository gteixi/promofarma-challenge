'use client';

import ProductList from '@/components/ProductList/ProductList';
import Cart from '@/components/Cart/Cart';
import styles from './page.module.css';
import MobileCartBar from '@/components/MobileCartBar/MobileCartBar';

export default function HomePage() {
  return (
    <main className={styles.page}>
      <h1>Promofarma Challenge</h1>

      <div>
        <section>
          <ProductList />
        </section>

        <aside>
          <Cart />
        </aside>
        <MobileCartBar />
      </div>
    </main>
  );
}
