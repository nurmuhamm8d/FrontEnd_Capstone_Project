import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SkillApiItem } from '../services/server';
import type { LoadStatus } from './educationSlice';

const STORAGE_KEY = 'cv-app:additional-skills';

interface SkillsState {
  items: SkillApiItem[];
  status: LoadStatus;
  error: string | null;
  addStatus: LoadStatus;
  addError: string | null;
}

const initialState: SkillsState = {
  items: [],
  status: 'idle',
  error: null,
  addStatus: 'idle',
  addError: null,
};

const readStoredSkills = (): SkillApiItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SkillApiItem[]) : [];
  } catch {
    return [];
  }
};

const persistStoredSkills = (skills: SkillApiItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
};

export const fetchSkills = createAsyncThunk('skills/fetch', async () => {
  const response = await fetch('/api/skills');
  if (!response.ok) {
    throw new Error('Не удалось загрузить навыки');
  }
  const serverSkills = (await response.json()) as SkillApiItem[];
  return [...serverSkills, ...readStoredSkills()];
});

export const addSkill = createAsyncThunk('skills/add', async (skill: SkillApiItem) => {
  const response = await fetch('/api/skills', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(skill),
  });
  if (!response.ok) {
    const body = (await response.json()) as { error?: string };
    throw new Error(body.error ?? 'Не удалось сохранить навык');
  }
  const created = (await response.json()) as SkillApiItem;
  persistStoredSkills([...readStoredSkills(), created]);
  return created;
});

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action: PayloadAction<SkillApiItem[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Ошибка загрузки';
      })
      .addCase(addSkill.pending, (state) => {
        state.addStatus = 'loading';
        state.addError = null;
      })
      .addCase(addSkill.fulfilled, (state, action: PayloadAction<SkillApiItem>) => {
        state.addStatus = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(addSkill.rejected, (state, action) => {
        state.addStatus = 'failed';
        state.addError = action.error.message ?? 'Ошибка сохранения';
      });
  },
});

export default skillsSlice.reducer;
