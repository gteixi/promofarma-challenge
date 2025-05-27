import { ReactNode } from 'react';
import { Open_Sans } from 'next/font/google';
import { CartProvider } from '@/context/Provider';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={openSans.className}>
      <head>
        <link rel="icon" href="/favicon/promofarma.ico" />
        <title>Promofarma Challenge</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Promofarma Challenge - App de listado de productos y carrito de compra"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
