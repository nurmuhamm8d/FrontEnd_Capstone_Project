import { render, screen } from '@testing-library/react';
import { PhotoBox } from './PhotoBox';

test('renders name, title, and description', () => {
  render(
    <PhotoBox
      name="John Doe"
      title="Programmer. Creative. Innovator"
      description="Some description"
      avatar="/avatar.jpg"
    />
  );
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Programmer. Creative. Innovator')).toBeInTheDocument();
  expect(screen.getByAltText('John Doe')).toHaveAttribute('src', '/avatar.jpg');
});
