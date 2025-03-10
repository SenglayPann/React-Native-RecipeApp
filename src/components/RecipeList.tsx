import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {MealItem, MealListProps} from '../types/meal';
import RecipeCard from './RecipeCard';

function RecipeList({meals}: MealListProps) {
  const renderItem: ListRenderItem<MealItem> = ({item}) => {
    return <RecipeCard meal={item} />;
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={meals}
      renderItem={renderItem}
      keyExtractor={item => item.idMeal}
    />
  );
}

export default RecipeList;
