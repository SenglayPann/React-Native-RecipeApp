import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeScreenState} from "../types/homescreen";
import { CategoryResponse, MealResponse } from "../types/meal";

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
      state.isFetchCategryError = false;
      state.errMessages.category = '';
    },
    setMealRessponse: (state, action: PayloadAction<MealResponse>) => {
      state.mealRespone = action.payload;
      state.isLoadingMeals = false;
      state.isFetchMealError = false;
      state.errMessages.meal = '';
    },
    setIsFetchCategoryError: (state, action: PayloadAction<string>) => {
      state.isFetchCategryError = true;
      state.errMessages.category = action.payload;
    },
    setIsFetchMealError: (state, action: PayloadAction<string>) => {
      state.isFetchCategryError = true;
      state.errMessages.meal = action.payload;
    },
  },
});

export const {
  setCategoryResponse,
  setMealRessponse,
  setIsFetchCategoryError,
  setIsFetchMealError,
} = homeSlice.actions;


export default homeSlice.reducer;
