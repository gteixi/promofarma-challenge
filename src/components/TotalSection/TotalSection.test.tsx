import { render, screen } from '@testing-library/react';
import TotalSection from './TotalSection';
import { describe, it, expect } from 'vitest';
import { mockCartItems } from '@/test/__testUtils__/mockCartItems';

describe('[TotalSection Component]', () => {
  it('renders product counter text and total', () => {
    render(<TotalSection cartItems={mockCartItems} totalPrice={25} />);

    const summary = screen.getByLabelText('Total: 25.00 euros for 2 products');
    expect(summary).toBeInTheDocument();

    const total = screen.getByLabelText('25.00 euros');
    expect(total).toBeInTheDocument();

    expect(screen.getByText('(2 productos)')).toBeInTheDocument();
    expect(screen.getByText('25.00 €')).toBeInTheDocument();
  });
});
