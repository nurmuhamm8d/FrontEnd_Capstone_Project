import { render, screen } from '@testing-library/react';
import { Box } from './Box';

test('renders title and content', () => {
  render(<Box title="About me" content="Some content" />);
  expect(screen.getByText('About me')).toBeInTheDocument();
  expect(screen.getByText('Some content')).toBeInTheDocument();
});
