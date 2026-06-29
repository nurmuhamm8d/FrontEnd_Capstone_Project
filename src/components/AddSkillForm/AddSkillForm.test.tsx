import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../../store/skillsSlice';
import { AddSkillForm } from './AddSkillForm';

const renderForm = () => {
  const store = configureStore({ reducer: { skills: skillsReducer } });
  render(
    <Provider store={store}>
      <AddSkillForm />
    </Provider>
  );
  return store;
};

afterEach(() => {
  localStorage.clear();
  jest.restoreAllMocks();
});

test('shows validation errors when submitted empty', async () => {
  renderForm();
  await userEvent.click(screen.getByRole('button', { name: 'Add skill' }));

  expect(await screen.findByText('Skill name is required')).toBeInTheDocument();
  expect(await screen.findByText('Skill range is required')).toBeInTheDocument();
});

test('rejects a name that is too short', async () => {
  renderForm();
  await userEvent.type(screen.getByLabelText('Skill name:'), 'A');
  await userEvent.click(screen.getByRole('button', { name: 'Add skill' }));

  expect(await screen.findByText('Minimum 2 characters')).toBeInTheDocument();
});

test('rejects a range above 100', async () => {
  renderForm();
  await userEvent.type(screen.getByLabelText('Skill name:'), 'GraphQL');
  await userEvent.type(screen.getByLabelText('Skill range:'), '150');
  await userEvent.click(screen.getByRole('button', { name: 'Add skill' }));

  expect(await screen.findByText('Maximum 100%')).toBeInTheDocument();
});

test('submits a valid skill and resets the form', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ name: 'GraphQL', range: 70 }),
  } as Response);

  renderForm();
  await userEvent.type(screen.getByLabelText('Skill name:'), 'GraphQL');
  await userEvent.type(screen.getByLabelText('Skill range:'), '70');
  await userEvent.click(screen.getByRole('button', { name: 'Add skill' }));

  await waitFor(() => expect(screen.getByLabelText('Skill name:')).toHaveValue(''));
});

test('shows a server-provided failure message when the submit fails', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: false,
    json: async () => ({ error: 'Name already taken' }),
  } as Response);

  renderForm();
  await userEvent.type(screen.getByLabelText('Skill name:'), 'GraphQL');
  await userEvent.type(screen.getByLabelText('Skill range:'), '70');
  await userEvent.click(screen.getByRole('button', { name: 'Add skill' }));

  expect(await screen.findByRole('alert')).toHaveTextContent('Name already taken');
});

test('falls back to a default failure message when the store has no addError', () => {
  const store = configureStore({
    reducer: { skills: skillsReducer },
    preloadedState: {
      skills: { items: [], status: 'idle' as const, error: null, addStatus: 'failed' as const, addError: null },
    },
  });
  render(
    <Provider store={store}>
      <AddSkillForm />
    </Provider>
  );

  expect(screen.getByRole('alert')).toHaveTextContent('Failed to save the skill');
});
