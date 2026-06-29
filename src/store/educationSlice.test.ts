import educationReducer, { fetchEducation } from './educationSlice';

const initialState = { items: [], status: 'idle' as const, error: null };

test('pending sets status to loading and clears error', () => {
  const state = educationReducer(
    { ...initialState, status: 'failed', error: 'oops' },
    fetchEducation.pending('requestId')
  );
  expect(state.status).toBe('loading');
  expect(state.error).toBeNull();
});

test('fulfilled stores the payload and marks succeeded', () => {
  const payload = [{ date: 2024, title: 'EPAM', description: 'text' }];
  const state = educationReducer(initialState, fetchEducation.fulfilled(payload, 'requestId'));
  expect(state.status).toBe('succeeded');
  expect(state.items).toEqual(payload);
});

test('rejected marks failed and stores the error message', () => {
  const state = educationReducer(
    initialState,
    fetchEducation.rejected(new Error('network down'), 'requestId')
  );
  expect(state.status).toBe('failed');
  expect(state.error).toBe('network down');
});

test('rejected falls back to a default message when none is provided', () => {
  const state = educationReducer(initialState, {
    type: fetchEducation.rejected.type,
    error: {},
  });
  expect(state.status).toBe('failed');
  expect(state.error).toBe('Loading error');
});
