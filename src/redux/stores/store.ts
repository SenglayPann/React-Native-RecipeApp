import { configureStore } from '@reduxjs/toolkit';
import homeReducers from '../slices/homeSlice';

const store = configureStore({
  reducer:{
    home: homeReducers,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
