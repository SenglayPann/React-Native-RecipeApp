import React, {useState, useEffect, Fragment} from 'react';
import {Box, ScrollView} from '@gluestack-ui/themed';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Listcontainer from '../components/Listcontainer';
import CategoryList from '../components/CategoryList';

import {type CategoryResponse, type MealResponse} from '../types/meal';
import RecipeList from '../components/RecipeList';
import {getCategories, getMeals} from '../utils/api';
import {LogBox} from 'react-native';
import LoadingScreen from '../components/LoadingScreen';

// const categoryListRes: CategoryResponse = require('../assets/mock/category-list.json');
// const mealListRes: MealResponse = require('../assets/mock/meal-list.json');

function Home(): React.ReactNode {
  LogBox.ignoreLogs([
    'Warning: Invalid prop `fill` supplied to `React.Fragment`',
  ]);
  const [categoryResponse, setCategoryResponse] =
    useState<CategoryResponse | null>(null);
  const [mealRespone, setMealResponse] = useState<MealResponse | null>(null);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);
  const [isFetchCategrysError, setIsFetchCategoryError] =
    useState<boolean>(false);
  const [isLoadingMeals, setIsLoadingMeals] = useState<boolean>(true);
  const [isFetchMealError, setIsFetchMealError] = useState<boolean>(false);

  const fetchCategories = async () => {
    try {
      const categoryRes = await getCategories(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      );
      if (categoryRes) {
        setCategoryResponse(categoryRes);
        // console.log(categoryRes);
      }
    } catch (e) {
      setIsFetchCategoryError(true);
      console.log(e);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const fetchMeals = async () => {
    try {
      const mealRes = await getMeals(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      );
      if (mealRes) {
        setMealResponse(mealRes);
        // console.log(mealRes);
      }
    } catch (e) {
      setIsFetchMealError(true);
      console.log(e);
    } finally {
      setIsLoadingMeals(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchMeals();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} width={'$full'}>
      {/* header */}
      <Header />
      {/* SearchBar */}
      <SearchBar />
      {/* Categoried */}
      {isLoadingCategories && isLoadingMeals ? (
        <Box height={'$full'} justifyContent="center">
          <LoadingScreen />
        </Box>
      ) : (
        <Fragment>
          <Listcontainer listName={'Categories'}>
            {categoryResponse && (
              <CategoryList categories={categoryResponse.categories} />
            )}
          </Listcontainer>
          <Listcontainer listName={'Recomendation'}>
            {mealRespone && <RecipeList meals={mealRespone?.meals} />}
          </Listcontainer>
        </Fragment>
      )}
    </ScrollView>
  );
}

export default Home;
