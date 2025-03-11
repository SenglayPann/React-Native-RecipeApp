import React, {useState, useEffect} from 'react';
import {ScrollView, LoaderIcon} from '@gluestack-ui/themed';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Listcontainer from '../components/Listcontainer';
import CategoryList from '../components/CategoryList';

import {
  CategoryListProps,
  MealListProps,
  type CategoryResponse,
  type MealResponse,
} from '../types/meal';
import RecipeList from '../components/RecipeList';
import {getMeals} from '../utils/api';

const categoryListRes: CategoryResponse = require('../assets/mock/category-list.json');
const mealListRes: MealResponse = require('../assets/mock/meal-list.json');

function Home(): React.ReactNode {
  const [categories, setCategories] = useState<CategoryListProps>();
  const [mealRespone, setMealResponse] = useState<MealResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(true);

  const fetchMeals = async () => {
    try {
      const mealRes = await getMeals(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      );
      if (mealRes) {
        setMealResponse(mealRes);
        console.log(mealRes);
      }
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} width={'$full'}>
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
        {mealRespone && <RecipeList meals={mealRespone?.meals} />}
      </Listcontainer>
    </ScrollView>
  );
}

export default Home;
