import React, {useEffect, useState} from 'react';
import {RootTabParamList} from '../types/navigation';
import {ScrollView, Box} from '@gluestack-ui/themed';
import MealGallery from '../components/MealGallery';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DetialsBoard from '../components/DetialsBoard';
import {MealItem} from '../types/meal';
import FixedPosButton from '../components/FixedPosButton';

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
    <Box width={'$full'}>
      <ScrollView>
        <MealGallery thumbUri={thumbUri} />
        <DetialsBoard meal={meal} />
      </ScrollView>
      <FixedPosButton iconName="long-arrow-left" left={20} />
      <FixedPosButton iconName="bookmark" right={20} />
      <MealGallery thumbUri={thumbUri} />
      <DetialsBoard meal={meal} />
    </Box>
  );
};

export default RecipeDetails;
