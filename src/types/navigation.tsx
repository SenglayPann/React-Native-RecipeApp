import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MealItem} from './meal';

export type RootTabParamList = {
  Home: undefined;
  RecipeDetails: {
    meal: MealItem;
  };
};

export type TabNavigationProps = BottomTabNavigationProp<RootTabParamList>;
