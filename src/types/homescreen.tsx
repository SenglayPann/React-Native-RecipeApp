import {CategoryResponse, MealResponse} from './meal';

type ErrorMessages = {
  category: string;
  meal: string;
};

export type HomeScreenState = {
  categoryResponse: CategoryResponse | null;
  mealRespone: MealResponse | null;
  isLoadingCategories: boolean;
  isLoadingMeals: boolean;
  isFetchCategryError: boolean;
  isFetchMealError: boolean;
  errMessages: ErrorMessages;
};
