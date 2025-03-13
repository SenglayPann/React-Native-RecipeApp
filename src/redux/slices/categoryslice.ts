import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type mealCategoryState = {
  categoryName: string
}

const initialState: mealCategoryState = {
  categoryName: '',
};

const mealCategorySlice = createSlice({
  name: 'mealCategory',
  initialState: initialState,
  reducers: {
    setCategoryName: (state, action: PayloadAction<string>) => {
      state.categoryName = action.payload;
    },
  },
});

export const { setCategoryName } = mealCategorySlice.actions;

export default mealCategorySlice.reducer;
