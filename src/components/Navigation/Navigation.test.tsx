import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

test('renders all six section links', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  ['About me', 'Education', 'Experience', 'Portfolio', 'Contacts', 'Feedback'].forEach((label) => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
