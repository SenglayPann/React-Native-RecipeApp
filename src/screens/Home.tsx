import React, {useEffect, Fragment} from 'react';
import {Box, ScrollView} from '@gluestack-ui/themed';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Listcontainer from '../components/Listcontainer';
import CategoryList from '../components/CategoryList';

import RecipeList from '../components/RecipeList';
import {fetchCategories, fetchMeals} from '../utils/api';
import {LogBox} from 'react-native';
import LoadingScreen from '../components/LoadingScreen';
import Message from '../components/Message';

import type {RootState, AppDispatch} from '../redux/stores/store';
import {useSelector, useDispatch} from 'react-redux';
import {setCategoryName} from '../redux/slices/categoryslice';

LogBox.ignoreLogs([
  'Warning: Invalid prop `fill` supplied to `React.Fragment`',
]);
function Home(): React.ReactNode {
  const homeStates = useSelector((state: RootState) => state.home);
  const mealCategoryStates = useSelector(
    (state: RootState) => state.mealCategory,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchCategories(dispatch);
  }, []);

  useEffect(() => {
    if (mealCategoryStates.categoryName) {
      fetchMeals(dispatch, mealCategoryStates.categoryName);
    }
  }, [mealCategoryStates.categoryName]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} width={'$full'}>
      {/* header */}
      <Header />
      {/* SearchBar */}
      <SearchBar />
      {/* Categoried */}
      {homeStates.isLoadingCategories || homeStates.isLoadingMeals ? (
        <Box height={'$full'} justifyContent="center">
          <LoadingScreen />
        </Box>
      ) : (
        <Fragment>
          <Listcontainer listName={'Categories'}>
            {homeStates.categoryResponse &&
              (homeStates.categoryResponse.categories.length ? (
                <CategoryList
                  categories={homeStates.categoryResponse.categories}
                />
              ) : (
                <Message message="Categories is empty" />
              ))}
            {homeStates.isFetchCategryError && (
              <Message message={homeStates.errMessages.category} />
            )}
          </Listcontainer>

          <Listcontainer listName={'Recomendation'}>
            {homeStates.mealRespone &&
              (homeStates.mealRespone?.meals?.length ? (
                <RecipeList meals={homeStates.mealRespone.meals} />
              ) : (
                <Message message="Meals is empty" />
              ))}
            {homeStates.isFetchCategryError && (
              <Message message={homeStates.errMessages.meal} />
            )}
          </Listcontainer>
        </Fragment>
      )}
    </ScrollView>
  );
}

export default Home;
