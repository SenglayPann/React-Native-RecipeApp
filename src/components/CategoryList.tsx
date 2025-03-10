import React from 'react';
import {Text} from '@gluestack-ui/themed';
import {ListRenderItem, FlatList} from 'react-native';

import type {CategoryListProps, Category} from '../types/meal';
import CategoryCard from './CategoryCard';

function CategoryList({categories}: CategoryListProps): React.ReactNode {
  const renderItem: ListRenderItem<Category> = ({item}) => {
    return <CategoryCard category={item} />;
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.idCategory}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default CategoryList;
