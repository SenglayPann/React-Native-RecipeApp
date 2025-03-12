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

import type {RootState, AppDispatch} from '../stores/store';
import {useSelector, useDispatch} from 'react-redux';

LogBox.ignoreLogs([
  'Warning: Invalid prop `fill` supplied to `React.Fragment`',
]);
function Home(): React.ReactNode {
  const homeStates = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchCategories(dispatch);
    fetchMeals(dispatch);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} width={'$full'}>
      {/* header */}
      <Header />
      {/* SearchBar */}
      <SearchBar />
      {/* Categoried */}
      {homeStates.isLoadingCategories && homeStates.isLoadingMeals ? (
        <Box height={'$full'} justifyContent="center">
          <LoadingScreen />
        </Box>
      ) : (
        <Fragment>
          <Listcontainer listName={'Categories'}>
            {homeStates.categoryResponse && (
              <CategoryList
                categories={homeStates.categoryResponse.categories}
              />
            )}
            {homeStates.isFetchCategryError && <Message message="" />}
          </Listcontainer>
          <Listcontainer listName={'Recomendation'}>
            {homeStates.mealRespone && (
              <RecipeList meals={homeStates.mealRespone?.meals} />
            )}
          </Listcontainer>
        </Fragment>
      )}
    </ScrollView>
  );
}

export default Home;
