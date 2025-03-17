import React from 'react';
import {Box, HStack, Image, Text} from '@gluestack-ui/themed';
import {Ingredient} from '../utils/objectUtil';

type Props = {
  ingredient: Ingredient;
};

const IngredientCard = ({ingredient}: Props) => {
  return (
    <Box>
      <HStack alignItems="center">
        <HStack flex={1} alignItems="center">
          <Image
            source={
              'https://www.themealdb.com/images/ingredients/' +
              ingredient.ingredientName +
              '-small.png'
            }
            width={50}
            height={50}
            borderRadius={6}
            bgColor="$coolGray200"
            alt={ingredient.ingredientName}
          />
          <Text ml={'$2'} fontSize={'$xs'} color="$coolGray800">
            {ingredient.ingredientName}
          </Text>
        </HStack>
        <Text ml={'$2'} fontSize={'$xs'} color="$coolGray800">
          {ingredient.measurement}
        </Text>
      </HStack>
    </Box>
  );
};

export default IngredientCard;
