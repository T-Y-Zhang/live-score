import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchEvents } from './eventsAPI';
import { IEvent } from './types';
import { convertEventApiData2IEventsArray } from './utils';

export interface EventsState {
  data: IEvent[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: EventsState = {
  data: [],
  status: 'idle',
};

export const getEventsAsync = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    const response = await fetchEvents();
    return convertEventApiData2IEventsArray(response.data);
  },
);

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    toggleEntry: (state, action: PayloadAction<number>) => {
      state.data.splice(action.payload, 1, {...state.data[action.payload], isEntry: !state.data[action.payload].isEntry});
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEventsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getEventsAsync.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(getEventsAsync.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const { toggleEntry } = eventsSlice.actions;

export default eventsSlice.reducer;
