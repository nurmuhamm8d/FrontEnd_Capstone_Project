import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import educationReducer from '../../../store/educationSlice';
import { Education } from './Education';

const renderWithStore = () => {
  const store = configureStore({ reducer: { education: educationReducer } });
  render(
    <Provider store={store}>
      <Education />
    </Provider>
  );
};

afterEach(() => {
  jest.restoreAllMocks();
});

test('shows a spinner while loading, then the timeline on success', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => [{ date: 2024, title: 'EPAM', description: 'Some text' }],
  } as Response);

  renderWithStore();

  expect(screen.getByRole('status')).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('EPAM')).toBeInTheDocument());
});

test('shows an error notification when the request fails', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({ ok: false } as Response);

  renderWithStore();

  expect(await screen.findByRole('alert')).toHaveTextContent('Failed to load the education section');
});

test('falls back to a default message when the store has a failed status without an error', () => {
  const store = configureStore({
    reducer: { education: educationReducer },
    preloadedState: { education: { items: [], status: 'failed' as const, error: null } },
  });
  render(
    <Provider store={store}>
      <Education />
    </Provider>
  );

  expect(screen.getByRole('alert')).toHaveTextContent('Failed to load the education section');
});
