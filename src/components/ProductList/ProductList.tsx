import { PRODUCTS } from '@/data/products';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

export default function ProductList() {
  return (
    <section className={styles['product-list']}>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
