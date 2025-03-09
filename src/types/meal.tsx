export type MealItem = {
    idMeal:           string;
    strMeal:          string;
    strMealAlternate: null;
    strCategory:      string;
    strArea:          string;
    strInstructions:  string;
    strMealThumb:     string;
    strTags:          string;
    strYoutube:       string;
    strIngredient1:   string;
    strIngredient2:   string;
    strIngredient3:   string;
    strIngredient4:   string;
    strIngredient5:   string;
    strIngredient6:   string;
    strIngredient7:   string;
    strIngredient8:   string;
    strIngredient9:   string;
}

export type mealList = {
    [key: string]: MealItem
}
