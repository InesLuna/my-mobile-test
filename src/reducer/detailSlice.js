import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
  name: 'detailList',
  initialState: {
    detailIds: [],
    actualId: '',
    detailList: [],
    actualProduct: null,
    loading: false,
  },
  reducers: {
    detailAdd: (state, action) => {
      state.detailList.push(action.payload);
    },
    detailIdsAdd: (state, action) => {
      state.detailIds.push(action.payload);
    },
    detailSetActualId: (state, action) => {
      state.actualId = action.payload;
    },
    detailSetActualProduct: (state, action) => {
      state.actualProduct = action.payload;
    },
    loadingSet: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { detailAdd, detailIdsAdd, detailSetActualId, detailSetActualProduct, loadingSet } = detailSlice.actions;

export default detailSlice.reducer;