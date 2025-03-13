import React, {useCallback, useRef, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {MealItem, MealListProps} from '../types/meal';
import RecipeCard from './RecipeCard';

type vsisibleItemList = {
  [key: string]: boolean;
};

type viewableItemProps = {
  viewableItems: any[];
};

function RecipeList({meals}: MealListProps) {
  const [visibleItems, setVisibleItems] = useState<vsisibleItemList>({});
  const visiblitiyConfig = useRef({
    viewAreaCoveragePercentThreshold: 1,
  }).current;

  const handleOnViewItemsChanged = useCallback(
    ({viewableItems}: viewableItemProps) => {
      const newVisibleItems: vsisibleItemList = {};

      viewableItems.forEach(item => {
        newVisibleItems[item.item.idMeal] = true;
        console.log('<---', item, '--->');
      });
      setVisibleItems(prev => ({
        ...prev,
        ...newVisibleItems,
      }));
    },
    [],
  );

  const renderItem: ListRenderItem<MealItem> = ({item}) => {
    return <RecipeCard meal={item} isVisibled={!!visibleItems[item.idMeal]} />;
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={meals}
      renderItem={renderItem}
      keyExtractor={item => item.idMeal}
      onViewableItemsChanged={handleOnViewItemsChanged}
      viewabilityConfig={visiblitiyConfig}
    />
  );
}

export default RecipeList;
