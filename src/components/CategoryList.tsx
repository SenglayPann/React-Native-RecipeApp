import React, {useEffect, useState} from 'react';
import {ListRenderItem, FlatList, StyleSheet} from 'react-native';

import type {CategoryListProps, Category} from '../types/meal';
import CategoryCard from './CategoryCard';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/stores/store';
import {fetchMeals} from '../utils/api';

function CategoryList({categories}: CategoryListProps): React.ReactNode {
  const [currentCategoryName, setCurrentCategoryName] = useState<string>(
    categories[0].strCategory,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchMeals(dispatch, currentCategoryName);
  }, [currentCategoryName]);

  const renderItem: ListRenderItem<Category> = ({item}) => {
    return (
      <CategoryCard
        category={item}
        currentCategoryName={currentCategoryName}
        setCurrentCategoryName={setCurrentCategoryName}
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
