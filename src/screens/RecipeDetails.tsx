import React, {useEffect, useState} from 'react';
import {RootTabParamList} from '../types/navigation';
import {Box} from '@gluestack-ui/themed';
import MealGallery from '../components/MealGallery';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootTabParamList, 'RecipeDetails'>;

const RecipeDetails = ({route, navigation}: Props) => {
  const [thumbUri, setThumbUri] = useState<string[]>([]);

  useEffect(() => {
    if (route.params?.meal) {
      setThumbUri(Array(3).fill(route.params.meal.strMealThumb));
    } else {
      navigation.goBack();
    }
  }, [route.params]);

  return (
    <Box>
      <MealGallery thumbUri={thumbUri} />
    </Box>
  );
};

export default RecipeDetails;
