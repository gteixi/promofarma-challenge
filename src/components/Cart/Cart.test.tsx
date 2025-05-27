import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Cart from './Cart';
import { useCart } from '@/context/hook';

// Mock Cart Context
vi.mock('@/context/hook', () => ({
  useCart: vi.fn(),
}));

const mockCartItems = [
  { id: '1', name: 'Product A', price: 5.0, image: '/a.png' },
  { id: '2', name: 'Product B', price: 10.0, image: '/b.png' },
];

describe('[Cart Component]', () => {
  beforeEach(() => {
    (useCart as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      cartItems: mockCartItems,
      totalPrice: 15.0,
    });
  });

  it('renders the shopping cart container', () => {
    render(<Cart />);
    const cart = screen.getByLabelText(/shopping cart/i);
    expect(cart).toBeInTheDocument();
  });

  it('renders the cart item list', () => {
    render(<Cart />);
    const list = screen.getByLabelText(/cart item list, 2 products/i);
    expect(list).toBeInTheDocument();
  });

  it('renders the total section', () => {
    render(<Cart />);
    const totalSection = screen.getByLabelText(/cart total section/i);
    expect(totalSection).toBeInTheDocument();
  });

  it('renders all product names in cart', () => {
    render(<Cart />);
    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
  });
});
