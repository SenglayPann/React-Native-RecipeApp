import axios from 'axios';
import { CategoryResponse, MealResponse } from '../types/meal';
import { setCategoryResponse, setIsFetchCategoryError, setIsFetchMealError, setMealResponse } from '../redux/slices/homeSlice';
import { AppDispatch } from '../redux/stores/store';
import { MutableRefObject} from 'react';


export const getMeals = async (url: string, controllerSignal: AbortSignal): Promise<MealResponse> => {
  try {
    const response = await axios.get<MealResponse>(url, { signal: controllerSignal});
    return response.data;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw new Error('Failed fetching meals');
  }
};

export const getCategories = async (url: string): Promise<CategoryResponse> => {
  try {
    const response = await axios.get<CategoryResponse>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed fetching categories');
  }
};


export const fetchCategories = async (dispatch: AppDispatch) => {
  try {
    const categoryRes = await getCategories(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );
    if (categoryRes) {
      dispatch(setCategoryResponse(categoryRes));
    }
  } catch (e) {
    dispatch(setIsFetchCategoryError('failed fetching categories.'));
    console.log(e);
  }
};

export const fetchMeals = async (dispatch: AppDispatch, mealCategory: string, controllerRef: MutableRefObject<AbortController | null>) => {
  if (controllerRef?.current) {
    controllerRef?.current.abort();
    // console.log('aborted')
  }

  const controller = new AbortController();
  controllerRef.current = controller;

  try {
    const mealRes = await getMeals(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategory}`, controller.signal,
    );
    if (mealRes) {
      dispatch(setMealResponse(mealRes));
      console.log(mealRes);
    }
  } catch (e) {
    dispatch(setIsFetchMealError('Failed fetching Meal'));
    // console.log(e);
  }
};
