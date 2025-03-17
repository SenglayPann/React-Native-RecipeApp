import React, {useEffect, useState, useRef} from 'react';
import {ListRenderItem, FlatList, StyleSheet} from 'react-native';

import type {Category, CategoryListProps} from '../types/meal';
import CategoryCard from './CategoryCard';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/stores/store';
import {fetchMeals} from '../utils/api';
import {debounce} from '../utils/deboune';
import {finalCategoryNameRef} from '../constant';

function CategoryList({categories}: CategoryListProps): React.ReactNode {
  const [currentCategoryName, setCurrentCategoryName] = useState<string>(
    categories[0].strCategory,
  );
  const dispatch = useDispatch<AppDispatch>();
  const controllerRef = useRef<AbortController | null>(null);

  const handleFetchMeals = () => {
    fetchMeals(dispatch, finalCategoryNameRef.current || '', controllerRef);
  };

  const debounceHandler = debounce(handleFetchMeals, 400);
  useEffect(() => {
    fetchMeals(dispatch, currentCategoryName, controllerRef);
  }, []);

  const renderItem: ListRenderItem<Category> = ({item}) => {
    return (
      <CategoryCard
        category={item}
        currentCategoryName={currentCategoryName}
        setCurrentCategoryName={setCurrentCategoryName}
        debounceHandler={debounceHandler}
      />
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.idCategory}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.listContainerPadding}
    />
  );
}

export default CategoryList;

const styles = StyleSheet.create({
  listContainerPadding: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
