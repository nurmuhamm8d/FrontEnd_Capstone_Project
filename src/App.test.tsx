import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page at the root route', () => {
  render(<App />);
  expect(screen.getByText('Know more')).toBeInTheDocument();
});
