import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeScreenState} from '../../types/homescreen';
import { CategoryResponse, MealResponse } from '../../types/meal';

const initialState: HomeScreenState = {
  categoryResponse: null,
  mealRespone:null,
  isLoadingCategories: true,
  isLoadingMeals: true,
  isFetchCategryError: false,
  isFetchMealError: false,
  errMessages: {
    category: '',
    meal: '',
  },
};

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    setCategoryResponse: (state, action: PayloadAction<CategoryResponse>) => {
      state.categoryResponse = action.payload;
      state.isLoadingCategories = false;
    },
    setMealResponse: (state, action: PayloadAction<MealResponse>) => {
      state.mealRespone = action.payload;
      state.isLoadingMeals = false;
      state.isFetchMealError = false;
      state.errMessages.meal = '';
    },
    setIsFetchCategoryError: (state, action: PayloadAction<string>) => {
      state.isFetchCategryError = true;
      state.errMessages.category = action.payload;
      state.isLoadingCategories = false;
      state.isLoadingMeals = false;
    },
    setIsFetchMealError: (state, action: PayloadAction<string>) => {
      state.isFetchCategryError = true;
      state.errMessages.meal = action.payload;
      state.isLoadingMeals = false;
    },
    setIsFetchingMeals: (state) => {
      state.isLoadingMeals = true;
    },
  },
});

export const {
  setCategoryResponse,
  setMealResponse,
  setIsFetchCategoryError,
  setIsFetchMealError,
  setIsFetchingMeals,
} = homeSlice.actions;


export default homeSlice.reducer;
