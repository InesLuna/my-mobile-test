
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
    quantity: 0
  },
  reducers: {
    cartAdd: (state, action) => {
      state.value.push(action.payload);
    },
    cartCounter: (state, action) => {
      state.quantity += 1;
    }
  },
});

export const { cartAdd, cartCounter } = cartSlice.actions;

export default cartSlice.reducer;
