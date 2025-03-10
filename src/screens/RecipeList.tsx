import React from 'react';
import {ScrollView, FlatList} from 'react-native';
import {Box, Text, VStack} from '@gluestack-ui/themed';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Listcontainer from '../components/Listcontainer';
import CategoryList from '../components/CategoryList';

import type {CategoryResponse} from '../types/meal';

const categoryList: CategoryResponse = require('../assets/mock/category-list.json');

function RecipeList(): React.ReactNode {
  return (
    <ScrollView>
      {/* header */}
      <Header />
      {/* SearchBar */}
      <SearchBar />
      {/* Categoried */}
      <Listcontainer listName={'Categories'}>
        <CategoryList categories={categoryList.categories} />
      </Listcontainer>
      {/* recomendation */}
      <Listcontainer listName={'Recomendation'}>
        <CategoryList categories={categoryList.categories} />
      </Listcontainer>
    </ScrollView>
  );
}

export default RecipeList;
