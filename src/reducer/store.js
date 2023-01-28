import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import listSlice from './listSlice';
import detailSlice from './detailSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    list: listSlice,
    detailList: detailSlice,
  },
});
