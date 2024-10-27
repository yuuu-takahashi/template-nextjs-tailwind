import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { TopPage } from '@/components/pages/top';

describe('TopPage', () => {
  it('renders a heading', () => {
    render(<TopPage />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
