import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

test('renders default label with status role', () => {
  render(<Spinner />);
  expect(screen.getByRole('status')).toHaveTextContent('Loading…');
});

test('renders a custom label', () => {
  render(<Spinner label="Загружаем навыки…" />);
  expect(screen.getByRole('status')).toHaveTextContent('Загружаем навыки…');
});
