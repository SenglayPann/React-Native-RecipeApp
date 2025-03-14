import React, {useRef, useState, useEffect, Fragment} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {MealItem} from '../types/meal';
import RecipeCard from './RecipeCard';
import {StyleSheet} from 'react-native';
import LoadingScreen from './LoadingScreen';

type vsisibleItemList = {
  [key: string]: boolean;
};

type viewableItemProps = {
  viewableItems: any[];
};

type Props = {
  meals: MealItem[];
  isChangingMeals: boolean;
};

function RecipeList({meals, isChangingMeals}: Props) {
  const [visibleItems, setVisibleItems] = useState<vsisibleItemList>({});
  const visiblitiyConfig = useRef({
    viewAreaCoveragePercentThreshold: 1,
  }).current;
  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({animated: false, offset: 0});
    }
  }, [meals]);

  const handleOnViewItemsChanged = ({viewableItems}: viewableItemProps) => {
    const newVisibleItems: vsisibleItemList = {};

    viewableItems.forEach(item => {
      newVisibleItems[item.item.idMeal] = true;
    });
    setVisibleItems(prev => ({
      ...prev,
      ...newVisibleItems,
    }));
  };

  const renderItem: ListRenderItem<MealItem> = ({item}) => {
    return <RecipeCard meal={item} isVisibled={!!visibleItems[item.idMeal]} />;
  };

  return (
    <Fragment>
      {isChangingMeals ? (
        <LoadingScreen style={styles.LoadinScreen} />
      ) : (
        <FlatList
          ref={flatListRef}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={meals}
          renderItem={renderItem}
          keyExtractor={item => item.idMeal}
          onViewableItemsChanged={handleOnViewItemsChanged}
          viewabilityConfig={visiblitiyConfig}
          style={styles.listContainerPadding}
        />
      )}
    </Fragment>
  );
}

export default RecipeList;

const styles = StyleSheet.create({
  listContainerPadding: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  LoadinScreen: {
    paddingTop: 70,
    paddingBottom: 70,
  },
});
