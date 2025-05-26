import { render, RenderOptions } from '@testing-library/react';
import { CartProvider } from '@/context/CartContext';

interface RenderWithProvidersOptions extends RenderOptions {
  wrapper?: React.ComponentType;
}

const renderWithProviders = (ui: React.ReactElement, options?: RenderWithProvidersOptions) => {
  return render(ui, {
    wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
    ...options,
  });
};

export default renderWithProviders;
