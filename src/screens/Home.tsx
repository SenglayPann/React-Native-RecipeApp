import React from 'react';
import {ScrollView, FlatList} from 'react-native';
import {Box, Text, VStack} from '@gluestack-ui/themed';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Listcontainer from '../components/Listcontainer';
import CategoryList from '../components/CategoryList';

import type {CategoryResponse, MealListResponse} from '../types/meal';
import RecipeList from '../components/RecipeList';

const categoryListRes: CategoryResponse = require('../assets/mock/category-list.json');
const mealListRes: MealListResponse = require('../assets/mock/meal-list.json');

function Home(): React.ReactNode {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* header */}
      <Header />
      {/* SearchBar */}
      <SearchBar />
      {/* Categoried */}
      <Listcontainer listName={'Categories'}>
        <CategoryList categories={categoryListRes.categories} />
      </Listcontainer>
      {/* recomendation */}
      <Listcontainer listName={'Recomendation'}>
        <RecipeList meals={mealListRes.meals} />
      </Listcontainer>
    </ScrollView>
  );
}

export default Home;
