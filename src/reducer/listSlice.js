import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    value: [],
  },
  reducers: {
    listAdd: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { listAdd } = listSlice.actions;

export default listSlice.reducer;
