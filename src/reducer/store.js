import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import listSlice from './listSlice';
import detailSlice from './detailSlice';

export default configureStore({
  reducer: {
    cart: cartSlice,
    list: listSlice,
    detailList: detailSlice,
  },
});
