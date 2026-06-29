import { render, screen, fireEvent } from '@testing-library/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';

test('renders text and handles click', () => {
  const handleClick = jest.fn();
  render(<Button text="Know more" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Know more'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders an icon when one is provided', () => {
  render(<Button text="Menu" icon={faBars} />);
  expect(document.querySelector('svg')).toBeInTheDocument();
});
