import { Product } from '@/types/product';

export const mockProduct: Product = {
  id: '1',
  name: 'Product',
  price: 19.99,
  image: '/img1.jpg',
};

export const mockProducts: Product[] = [
  {
    id: 'cerave',
    name: 'Cerave ® Crema Hidratante 340ml',
    price: 11.7,
    image: '/images/products/cerave-crema.jpg',
  },
  {
    id: 'fotoprotector',
    name: 'Fotoprotector Solar ISDIN® Fusion Water SPF 50+ 50ml',
    price: 12.9,
    image: '/images/products/fotoprotector-isdin.jpg',
  },
  {
    id: 'hyabak',
    name: 'Hyabak Solución Oftálmica 10ml',
    price: 10.5,
    image: '/images/products/hyabak-solucion.jpg',
  },
  {
    id: 'lajusticia',
    name: 'LaJusticia Colágeno con Magnesio 350g',
    price: 15.2,
    image: '/images/products/lajusticia-colageno.jpg',
  },
  {
    id: 'piz',
    name: 'Piz Buin® Protector Solar SPF 30 200ml',
    price: 13.8,
    image: '/images/products/piz-buin.jpg',
  },
  {
    id: 'xhekpon',
    name: 'Xhekpon® Crema Facial 40ml',
    price: 8.9,
    image: '/images/products/xhekpon-crema.jpg',
  },
];
