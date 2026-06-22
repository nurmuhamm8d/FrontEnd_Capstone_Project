import { render, screen } from '@testing-library/react';
import { Address } from './Address';

test('renders mailto and tel links', () => {
  render(<Address email="me@example.com" phone="+1234567890" location="Almaty, KZ" />);
  expect(screen.getByText('me@example.com').closest('a')).toHaveAttribute(
    'href',
    'mailto:me@example.com'
  );
  expect(screen.getByText('+1234567890').closest('a')).toHaveAttribute(
    'href',
    'tel:+1234567890'
  );
  expect(screen.getByText('Almaty, KZ')).toBeInTheDocument();
});
