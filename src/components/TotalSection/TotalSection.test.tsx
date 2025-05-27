import { render, screen } from '@testing-library/react';
import TotalSection from './TotalSection';
import { mockProducts } from '@/__tests__/testUtils/mockProducts';

describe('TotalSection', () => {
  const totalPrice = mockProducts.reduce((sum, p) => sum + p.price, 0);

  it('renders the correct number of products', () => {
    render(<TotalSection cartItems={mockProducts} totalPrice={totalPrice} />);
    expect(screen.getByText(`(${mockProducts.length} productos)`)).toBeInTheDocument();
  });

  it('displays the correct total price with € and two decimals', () => {
    render(<TotalSection cartItems={mockProducts} totalPrice={totalPrice} />);
    expect(screen.getByText(`${totalPrice.toFixed(2)} €`)).toBeInTheDocument();
  });
});
