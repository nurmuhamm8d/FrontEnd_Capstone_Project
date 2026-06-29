import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';

test('renders the hero name, tagline, and Know more button', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(screen.getByText(/Nurmuhamed/i)).toBeInTheDocument();
  expect(screen.getByText('Know more')).toBeInTheDocument();
});

test('navigates to /inner when Know more is clicked', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inner" element={<div>Inner page</div>} />
      </Routes>
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText('Know more'));
  expect(screen.getByText('Inner page')).toBeInTheDocument();
});
