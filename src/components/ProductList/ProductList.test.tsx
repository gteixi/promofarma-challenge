import { screen } from '@testing-library/react';
import ProductList from './ProductList';
import renderWithProviders from '@/__tests__/testUtils/renderWithProviders';
import { mockProducts } from '@/__tests__/testUtils/mockProducts';

describe('ProductList', () => {
  it('renders a list of products', () => {
    renderWithProviders(<ProductList />);
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });
});
