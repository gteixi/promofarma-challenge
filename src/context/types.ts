import { Product } from '@/types/product';

export type CartContextType = {
  cartItems: Product[];
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};
