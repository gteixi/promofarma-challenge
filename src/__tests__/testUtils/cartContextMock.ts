import { vi } from 'vitest';
import { mockProduct } from './mockProducts';

export const addToCart = vi.fn();
export const removeFromCart = vi.fn();

export const mockUseIsInCart = () => ({
  cartItems: [mockProduct],
  addToCart,
  removeFromCart,
  totalPrice: mockProduct.price,
});

export const mockUseIsNotInCart = () => ({
  cartItems: [],
  addToCart,
  removeFromCart,
  totalPrice: 0,
});
