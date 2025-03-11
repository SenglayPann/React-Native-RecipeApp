export type MealItem = {
  idMeal: string;
  strMeal: string;
  strMealAlternate: null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
};

export type MealResponse = {
  meals: MealItem[];
};

export type MealListProps = {
  meals: MealItem[];
};

export type CategoryResponse = {
  categories: Category[];
};

export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type CategoryListProps = {
  categories: Category[];
};
