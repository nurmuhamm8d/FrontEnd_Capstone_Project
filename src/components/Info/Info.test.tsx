import { render, screen } from '@testing-library/react';
import { Info } from './Info';

test('renders the given text', () => {
  render(<Info text="Lorem ipsum" />);
  expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
});
