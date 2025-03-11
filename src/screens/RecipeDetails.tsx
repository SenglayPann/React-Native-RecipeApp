import React, {useEffect, useState} from 'react';
import {RootTabParamList} from '../types/navigation';
import {ScrollView} from '@gluestack-ui/themed';
import MealGallery from '../components/MealGallery';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DetialsBoard from '../components/DetialsBoard';
import {MealItem} from '../types/meal';

type Props = NativeStackScreenProps<RootTabParamList, 'RecipeDetails'>;

const RecipeDetails = ({route}: Props) => {
  const [thumbUri, setThumbUri] = useState<string[]>([]);
  const [meal, setMeal] = useState<MealItem | null>(null);

  useEffect(() => {
    if (route.params?.meal) {
      setThumbUri(Array(3).fill(route.params.meal.strMealThumb));
      setMeal(route.params.meal);
    }
  }, [route.params]);

  return (
    <ScrollView width={'$full'}>
      <MealGallery thumbUri={thumbUri} />
      <DetialsBoard meal={meal} />
    </ScrollView>
  );
};

export default RecipeDetails;
