// @ts-nocheck
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Inner } from './Inner';
import { AboutMe } from './sections/AboutMe';

test('renders the panel and the nested section, back-to-top scrolls up', () => {
  window.scrollTo = jest.fn();
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => [],
  } as Response);

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/inner/about']}>
        <Routes>
          <Route path="/inner" element={<Inner />}>
            <Route path="about" element={<AboutMe />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText('Back to top'));
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

  jest.restoreAllMocks();
});
