'use client';

import { useCart } from '@/context/CartContext';

import Image from 'next/image';

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <aside>
      <h2>MI CESTA:</h2>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <Image src={item.image} alt={item.name} content="" width={50} height={50} />
            <span>{item.name}</span>
            <span>{item.price.toFixed(2)} €</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
