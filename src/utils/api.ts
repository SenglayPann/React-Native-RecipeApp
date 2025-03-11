import axios from 'axios';
import { MealListResponse } from '../types/meal';

export const getMeals = async (url: string): Promise<MealListResponse> => {
  try {
    const response = await axios.get<MealListResponse>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw new Error('Failed fetching meals');
  }
};