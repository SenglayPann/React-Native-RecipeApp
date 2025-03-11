import { MealItem } from "../types/meal";

export type Ingredients = {
  [key: string]: string | undefined;
};

export type ArrayIngredients = (string| undefined)[];

export const groupObjectLike = (keyword: string, object: MealItem): Ingredients => {
  const grouped: Ingredients = Object.entries(object).reduce((acc, [key, value]) => {
    if (key.includes(keyword) && value) {
      acc[key] = value as string;
    }
    return acc;
  }, {} as Ingredients);
  return grouped;
};

export const ArrayOfGrouObjectLike = (keyword: string, object: MealItem): ArrayIngredients => {
  const groupedObject = groupObjectLike(keyword, object);
  const groupedArray = Object.entries(groupedObject).map(([, value]) => {
    if (value !== '') {
      return value;
    }
  });

  return groupedArray;
};

