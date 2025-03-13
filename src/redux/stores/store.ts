import { configureStore } from '@reduxjs/toolkit';
import homeReducers from '../slices/homeSlice';
import mealCategoryReducers from '../slices/categoryslice';

const store = configureStore({
  reducer:{
    home: homeReducers,
    mealCategory: mealCategoryReducers,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
