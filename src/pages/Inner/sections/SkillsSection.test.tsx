import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../../../store/skillsSlice';
import { SkillsSection } from './SkillsSection';

const renderWithStore = () => {
  const store = configureStore({ reducer: { skills: skillsReducer } });
  render(
    <Provider store={store}>
      <SkillsSection />
    </Provider>
  );
};

afterEach(() => {
  jest.restoreAllMocks();
});

test('shows a spinner while loading, then the skill bars and an Open edit toggle on success', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => [{ name: 'React', range: 80 }],
  } as Response);

  renderWithStore();

  expect(screen.getByRole('status')).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('React')).toBeInTheDocument());

  const openEditButton = screen.getByRole('button', { name: /open edit/i });
  expect(openEditButton).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Add skill' })).not.toBeInTheDocument();

  await userEvent.click(openEditButton);
  expect(screen.getByRole('button', { name: 'Add skill' })).toBeInTheDocument();
});

test('shows an error notification when the request fails', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({ ok: false } as Response);

  renderWithStore();

  expect(await screen.findByRole('alert')).toHaveTextContent('Failed to load skills');
});

test('falls back to a default message when the store has a failed status without an error', () => {
  const store = configureStore({
    reducer: { skills: skillsReducer },
    preloadedState: {
      skills: { items: [], status: 'failed' as const, error: null, addStatus: 'idle' as const, addError: null },
    },
  });
  render(
    <Provider store={store}>
      <SkillsSection />
    </Provider>
  );

  expect(screen.getByRole('alert')).toHaveTextContent('Failed to load skills');
});
