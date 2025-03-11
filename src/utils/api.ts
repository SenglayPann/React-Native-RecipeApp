import axios from 'axios';
import { CategoryResponse, MealResponse } from '../types/meal';

export const getMeals = async (url: string): Promise<MealResponse> => {
  try {
    const response = await axios.get<MealResponse>(url);
    return response.data;
  } catch (error) {
    // console.error('Error fetching meals:', error);
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
