import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Panel } from './Panel';

test('toggles the open class when the hamburger button is clicked', () => {
  render(
    <MemoryRouter>
      <Panel name="John Doe" title="Programmer" avatar="/avatar.jpg" />
    </MemoryRouter>
  );
  const panel = screen.getByTestId('panel');
  expect(panel.className).toMatch(/open/);

  fireEvent.click(screen.getByLabelText('Toggle navigation'));
  expect(panel.className).not.toMatch(/open/);
});
