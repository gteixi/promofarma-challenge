import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useCart } from '@/context/hook';
import { CartProvider } from '@/context/Provider';
import { mockCartItems } from '@/test/__testUtils__/mockCartItems';

// Mock the useCart hook
vi.mock('@/context/hook', () => ({
  useCart: vi.fn(),
}));

const mockAddToCart = vi.fn();
const mockRemoveFromCart = vi.fn();

const renderComponent = () =>
  render(
    <CartProvider>
      <ProductCard product={mockCartItems[0]} />
    </CartProvider>
  );

describe('[ProductCard Component]', () => {
  describe('when product is NOT in cart', () => {
    beforeEach(() => {
      (useCart as unknown as vi.Mock).mockReturnValue({
        cartItems: [],
        addToCart: mockAddToCart,
        removeFromCart: mockRemoveFromCart,
      });
      renderComponent();
    });

    it('shows "Add to cart" button', () => {
      const button = screen.getByRole('button', { name: /add item 1 to cart/i });
      expect(button).toBeInTheDocument();
    });

    it('renders correct price with aria-label', () => {
      const price = screen.getByLabelText(/price: 10.00 euros/i);
      expect(price).toBeInTheDocument();
    });
  });

  describe('when product IS in cart', () => {
    beforeEach(() => {
      (useCart as unknown as vi.Mock).mockReturnValue({
        cartItems: [mockCartItems[0]],
        addToCart: mockAddToCart,
        removeFromCart: mockRemoveFromCart,
      });
      renderComponent();
    });

    it('shows "Remove from cart" button', () => {
      const button = screen.getByRole('button', { name: /remove item 1 from cart/i });
      expect(button).toBeInTheDocument();
    });
  });
});
