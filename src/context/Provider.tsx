'use client';

import { ReactNode, useMemo, useState } from 'react';
import { Product } from '@/types/product';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartContextValue = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, totalPrice }),
    [cartItems, totalPrice]
  );

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};
