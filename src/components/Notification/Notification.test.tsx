import { render, screen } from '@testing-library/react';
import { Notification } from './Notification';

test('renders children inside an alert', () => {
  render(<Notification>Something broke</Notification>);
  expect(screen.getByRole('alert')).toHaveTextContent('Something broke');
});

test('applies the success type class', () => {
  render(<Notification type="success">Saved</Notification>);
  expect(screen.getByRole('alert').className).toMatch(/success/);
});
