import { Product } from '@/types/product';

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  totalPrice: number;
}
