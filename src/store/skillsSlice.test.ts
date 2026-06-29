import skillsReducer, { fetchSkills, addSkill } from './skillsSlice';

const initialState = {
  items: [],
  status: 'idle' as const,
  error: null,
  addStatus: 'idle' as const,
  addError: null,
};

afterEach(() => {
  localStorage.clear();
});

test('fetchSkills.fulfilled stores the payload', () => {
  const payload = [{ name: 'React', range: 80 }];
  const state = skillsReducer(initialState, fetchSkills.fulfilled(payload, 'requestId'));
  expect(state.status).toBe('succeeded');
  expect(state.items).toEqual(payload);
});

test('fetchSkills.rejected marks failed with an error message', () => {
  const state = skillsReducer(initialState, fetchSkills.rejected(new Error('boom'), 'requestId'));
  expect(state.status).toBe('failed');
  expect(state.error).toBe('boom');
});

test('addSkill.fulfilled appends the created skill', () => {
  const created = { name: 'GraphQL', range: 70 };
  const state = skillsReducer(initialState, addSkill.fulfilled(created, 'requestId', created));
  expect(state.addStatus).toBe('succeeded');
  expect(state.items).toContainEqual(created);
});

test('addSkill.rejected marks addStatus failed with an error message', () => {
  const skill = { name: 'GraphQL', range: 70 };
  const state = skillsReducer(initialState, addSkill.rejected(new Error('nope'), 'requestId', skill));
  expect(state.addStatus).toBe('failed');
  expect(state.addError).toBe('nope');
});

test('addSkill thunk persists the created skill to localStorage', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ name: 'GraphQL', range: 70 }),
  } as Response);

  const dispatch = jest.fn();
  const thunk = addSkill({ name: 'GraphQL', range: 70 });
  await thunk(dispatch, () => ({}), undefined);

  const stored = JSON.parse(localStorage.getItem('cv-app:additional-skills') ?? '[]');
  expect(stored).toEqual([{ name: 'GraphQL', range: 70 }]);

  jest.restoreAllMocks();
});

test('fetchSkills thunk tolerates corrupted localStorage and falls back to an empty list', async () => {
  localStorage.setItem('cv-app:additional-skills', 'not valid json{');
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => [{ name: 'React', range: 80 }],
  } as Response);

  const dispatch = jest.fn();
  const thunk = fetchSkills();
  const result = await thunk(dispatch, () => ({}), undefined);

  expect(result.payload).toEqual([{ name: 'React', range: 80 }]);
  jest.restoreAllMocks();
});

test('addSkill thunk rejects with the server-provided error message', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: false,
    json: async () => ({ error: 'Name already taken' }),
  } as Response);

  const dispatch = jest.fn();
  const thunk = addSkill({ name: 'GraphQL', range: 70 });
  const result = await thunk(dispatch, () => ({}), undefined);

  expect(result.type).toBe(addSkill.rejected.type);
  expect((result as { error: { message?: string } }).error.message).toBe('Name already taken');
  jest.restoreAllMocks();
});

test('addSkill thunk falls back to a default message when the server omits one', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: false,
    json: async () => ({}),
  } as Response);

  const dispatch = jest.fn();
  const thunk = addSkill({ name: 'GraphQL', range: 70 });
  const result = await thunk(dispatch, () => ({}), undefined);

  expect((result as { error: { message?: string } }).error.message).toBe('Failed to save the skill');
  jest.restoreAllMocks();
});
