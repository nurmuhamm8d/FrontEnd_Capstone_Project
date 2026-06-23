import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EducationApiItem } from '../services/server';

export type LoadStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface EducationState {
  items: EducationApiItem[];
  status: LoadStatus;
  error: string | null;
}

const initialState: EducationState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchEducation = createAsyncThunk('education/fetch', async () => {
  const response = await fetch('/api/educations');
  if (!response.ok) {
    throw new Error('Не удалось загрузить раздел образования');
  }
  return (await response.json()) as EducationApiItem[];
});

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Ошибка загрузки';
      });
  },
});

export default educationSlice.reducer;
