import { ImageRequireSource, ImageURISource } from "react-native";
import { Category, MealItem } from "../types/meal";

export type Ingredient = {
  ingredientName: string,
  measurement: string,
};

export type Ingredients = {
  [key: string]: Ingredient
};

export type ArrayIngredients = (Ingredient)[]; 

export const groupObjectLike = (keyword: string, object: MealItem): Ingredients => {
  const grouped: Ingredients = Object.entries(object).reduce((acc, [key, value]) => {
    if (key.includes(keyword) && value) {
      const measureKey = `strMeasure${key.replace(keyword, '')}`;
      acc[key] = {
        ingredientName: value,
        measurement: object[measureKey as keyof MealItem] || '' ,
      };
    }
    return acc;
  }, {} as Ingredients);
  return grouped;
};

export const ArrayOfGroubObjectLike = (keyword: string, object: MealItem): ArrayIngredients => {
  return Object.values(groupObjectLike(keyword, object)).filter(Boolean);
};

export const imageSourceConvert = (arrayObject: MealItem[]): ImageURISource[] => {
  return arrayObject.map(image => {
    return {uri: image.strMealThumb};
  });
};
