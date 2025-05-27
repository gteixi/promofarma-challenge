import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import MobileCartBar from './MobileCartBar';
import renderWithProviders from '@/__tests__/testUtils/renderWithProviders';
import { useMediaQuery } from '@/hooks/useMediaQuery';

vi.mock('@/hooks/useMediaQuery', () => ({
  useMediaQuery: vi.fn(),
}));

const mockedUseMediaQuery = useMediaQuery as unknown as vi.Mock;

describe('MobileCartBar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('does not render when screen is not mobile', () => {
    mockedUseMediaQuery.mockReturnValue(false);
    const { container } = renderWithProviders(<MobileCartBar />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders on mobile screens', () => {
    mockedUseMediaQuery.mockReturnValue(true);
    renderWithProviders(<MobileCartBar />);

    expect(screen.getByText(/MI CESTA:/i)).toBeInTheDocument();
  });
});
