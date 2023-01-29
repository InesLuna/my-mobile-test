import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
  name: 'detailList',
  initialState: {
    detailIds: [],
    actualId: '',
    detailDetailsList: [],
    actualProduct: null,
  },
  reducers: {
    detailAdd: (state, action) => {
      state.detailDetailsList.push(action.payload)
    },
    detailReplace: (state, action) => {
      const aux = state.detailDetailsList.filter((o) => action.payload.id !== o.id );
      state.detailDetailsList = [...aux, action.payload];
    },
    detailIdsAdd: (state, action) => {
      state.detailIds.push(action.payload)
    },
    detailSetActualId: (state, action) => {
      state.actualId = action.payload;
    },
    detailSetActualProduct: (state, action) => {
      state.actualProduct = action.payload;
    },
  },
});

export const { detailAdd, detailIdsAdd, detailSetActualId, detailReplace, detailSetActualProduct } = detailSlice.actions;

export default detailSlice.reducer;