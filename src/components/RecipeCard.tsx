import {Box, Card, Image, Text} from '@gluestack-ui/themed';
import React from 'react';
import {MealItem} from '../types/meal';

type Props = {
  meal: MealItem;
};

const safeM = '$4';

function RecipeCard({meal}: Props) {
  return (
    <Card mx={'$1.5'} p={0} borderRadius={20}>
      <Image
        source={{
          uri: meal.strMealThumb,
        }}
        width={150}
        height={200}
        borderRadius={20}
      />
      <Box mx={safeM} my={'$3'} gap={'$1'}>
        <Text fontSize={'$md'} fontWeight={'$semibold'} color="black">
          {meal.strMeal}
        </Text>
        <Text fontSize={'$sm'}>Origin: {meal.strArea}</Text>
      </Box>
    </Card>
  );
}

export default RecipeCard;
