import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import {
  mockUseIsInCart,
  mockUseIsNotInCart,
  addToCart,
  removeFromCart,
} from '@/__tests__/testUtils/cartContextMock';
import ProductCard from './ProductCard';
import { mockProduct } from '@/__tests__/testUtils/mockProducts';

// Mock the CartContext to control the product's cart state
vi.mock('@/context/CartContext', () => ({
  useCart: mockUseIsInCart,
}));

describe('ProductCard (mocked with product IS in cart)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays the product name', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByRole('heading', { name: 'Product' })).toBeInTheDocument();
  });

  it('calls removeFromCart if the product is already in the cart', () => {
    render(<ProductCard product={mockProduct} />);
    fireEvent.click(screen.getByRole('button'));
    expect(removeFromCart).toHaveBeenCalledWith('1');
  });

  it('applies special class if the product is in the cart', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('19.99 €').className).toMatch(/in-cart-price/);
    expect(screen.getByRole('button').className).toMatch(/in-cart/);
  });
});

describe('ProductCard (mocked with product NOT in cart)', () => {
  beforeEach(async () => {
    vi.resetModules();
    vi.doMock('@/context/CartContext', () => ({
      useCart: mockUseIsNotInCart,
    }));
  });

  it('calls addToCart if the product is not in the cart', async () => {
    render(<ProductCard product={mockProduct} />);
    fireEvent.click(screen.getByRole('button'));
    expect(addToCart).toHaveBeenCalledWith(mockProduct);
  });
});
