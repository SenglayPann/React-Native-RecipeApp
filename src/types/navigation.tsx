import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Category, MealItem} from './meal';

export type RootTabParamList = {
  Home: undefined;
  RecipeDetails: {
    meal: MealItem;
  };
  Category: {
    categories: Category[] | [];
  };
};

export type TabNavigationProps = BottomTabNavigationProp<RootTabParamList>;
