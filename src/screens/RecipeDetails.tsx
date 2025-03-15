import React, {Fragment, useEffect, useState} from 'react';
import {RootTabParamList} from '../types/navigation';
import {ScrollView, Box} from '@gluestack-ui/themed';
import MealGallery from '../components/MealGallery';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DetialsBoard from '../components/DetialsBoard';
import {MealItem} from '../types/meal';
import FixedPosButton from '../components/FixedPosButton';
import {fetchMeal} from '../utils/api';
import LoadingScreen from '../components/LoadingScreen';
import {StyleSheet} from 'react-native';
import Message from '../components/Message';

type Props = NativeStackScreenProps<RootTabParamList, 'RecipeDetails'>;

const RecipeDetails = ({route}: Props) => {
  const [thumbUri, setThumbUri] = useState<string[]>([]);
  const [meal, setMeal] = useState<MealItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const startFetchMeal = async () => {
      const idMeal = route.params.meal.idMeal;
      try {
        const mealRes = await fetchMeal(idMeal);
        if (mealRes.meals) {
          setMeal(mealRes.meals[0]);
        }
      } catch {
        setIsError(true);
        setError('Failed getting meal info');
      } finally {
        setIsLoading(false);
      }
    };

    startFetchMeal();
  }, [route.params]);

  useEffect(() => {
    setThumbUri(Array(3).fill(meal?.strMealThumb));
  }, [meal]);

  return (
    <Box width={'$full'}>
      {isLoading ? (
        <LoadingScreen style={styles.alternateScreen} />
      ) : isError ? (
        <Message message={error} />
      ) : (
        <Fragment>
          <ScrollView showsVerticalScrollIndicator={false}>
            <MealGallery thumbUri={thumbUri} />
            <DetialsBoard meal={meal} />
          </ScrollView>
          <FixedPosButton iconName="long-arrow-left" left={20} />
          <FixedPosButton iconName="bookmark" right={20} />
        </Fragment>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  alternateScreen: {
    alignSelf: 'center',
    height: 200,
  },
});

export default RecipeDetails;
