import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders text and handles click', () => {
  const handleClick = jest.fn();
  render(<Button text="Know more" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Know more'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
