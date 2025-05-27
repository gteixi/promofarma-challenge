import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { vi, describe, it, expect } from 'vitest';
import { useCart } from '@/context/hook';
import { CartProvider } from '@/context/Provider';
import { mockCartItems } from '@/test/__testUtils__/mockCartItems';

// Mock the useCart hook
vi.mock('@/context/hook', () => ({
  useCart: vi.fn(),
}));

// Utility: reset cart mock state
const setupUseCart = (isInCart = false) => {
  const cartItems = isInCart ? [mockCartItems[0]] : [];

  (useCart as unknown as vi.Mock).mockReturnValue({
    cartItems,
    addToCart: vi.fn(),
    removeFromCart: vi.fn(),
  });
};

describe('[ProductCard Component]', () => {
  it('shows "Add to cart" button when product is not in cart', () => {
    setupUseCart(false);

    render(
      <CartProvider>
        <ProductCard product={mockCartItems[0]} />
      </CartProvider>
    );

    const button = screen.getByRole('button', { name: /add item 1 to cart/i });
    expect(button).toBeInTheDocument();
  });

  it('shows "Remove from cart" button when product is in cart', () => {
    setupUseCart(true);

    render(
      <CartProvider>
        <ProductCard product={mockCartItems[0]} />
      </CartProvider>
    );

    const button = screen.getByRole('button', { name: /remove item 1 from cart/i });
    expect(button).toBeInTheDocument();
  });

  it('renders correct price with aria-label', () => {
    setupUseCart(false);

    render(
      <CartProvider>
        <ProductCard product={mockCartItems[0]} />
      </CartProvider>
    );

    const price = screen.getByLabelText(/price: 10.00 euros/i);
    expect(price).toBeInTheDocument();
  });
});
