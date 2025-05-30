import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProductList from './ProductList';
import { CartProvider } from '@/context/Provider';

vi.mock('@/data/products', () => ({
  PRODUCTS: [
    { id: '1', name: 'Item 1', price: 10, image: '/item1.png' },
    { id: '2', name: 'Item 2', price: 15, image: '/item2.png' },
  ],
}));

describe('[ProductList Component]', () => {
  beforeEach(() => {
    render(
      <CartProvider>
        <ProductList />
      </CartProvider>
    );
  });

  it('renders a section with aria-label', () => {
    const section = screen.getByLabelText(/product list/i);
    expect(section).toBeInTheDocument();
  });

  it('renders all products in the list', () => {
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});
