import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Panel } from './Panel';

const setViewportWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
};

afterEach(() => {
  setViewportWidth(1024);
});

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

test('shows a clickable backdrop on mobile once opened, navigates back via the go-back button', () => {
  setViewportWidth(400);
  render(
    <MemoryRouter>
      <Panel name="John Doe" title="Programmer" avatar="/avatar.jpg" />
    </MemoryRouter>
  );
  const panel = screen.getByTestId('panel');
  expect(panel.className).not.toMatch(/open/);

  fireEvent.click(screen.getByLabelText('Toggle navigation'));
  expect(panel.className).toMatch(/open/);

  const backdrop = screen.getByRole('presentation');
  fireEvent.click(backdrop);
  expect(panel.className).not.toMatch(/open/);

  fireEvent.click(screen.getByLabelText('Go back'));
});

test('reacts to a resize crossing the desktop breakpoint', () => {
  setViewportWidth(400);
  render(
    <MemoryRouter>
      <Panel name="John Doe" title="Programmer" avatar="/avatar.jpg" />
    </MemoryRouter>
  );
  const panel = screen.getByTestId('panel');
  expect(panel.className).not.toMatch(/open/);

  act(() => {
    setViewportWidth(1024);
    window.dispatchEvent(new Event('resize'));
  });
  expect(panel.className).toMatch(/open/);
});
