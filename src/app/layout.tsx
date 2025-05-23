import { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={openSans.className}>
      <head>
        <link rel="icon" href="/favicon/promofarma.ico" />
      </head>
      <body>
        <CartProvider>
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
