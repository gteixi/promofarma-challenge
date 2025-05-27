import { vi } from 'vitest';
import { mockProduct } from './mockProducts';
import { CartContextType } from '@/context/types';

export const addToCart = vi.fn();
export const removeFromCart = vi.fn();

export const mockUseIsInCart: () => CartContextType = () => ({
  cartItems: [mockProduct],
  addToCart,
  removeFromCart,
  totalPrice: mockProduct.price,
});

export const mockUseIsNotInCart: () => CartContextType = () => ({
  cartItems: [],
  addToCart,
  removeFromCart,
  totalPrice: 0,
});
