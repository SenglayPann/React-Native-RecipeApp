import React from 'react';
import {Box, HStack, Image, Text} from '@gluestack-ui/themed';

type Props = {
  ingredientName: string | undefined;
};

const IngredientCard = ({ingredientName}: Props) => {
  return (
    <Box>
      <HStack>
        <HStack flex={1} alignItems="center">
          <Image
            source={require('../assets/sugar.jpg')}
            width={50}
            height={50}
            borderRadius={6}
            alt={'sugar'}
          />
          <Text ml={'$2'} fontSize={'$xs'} color="$coolGray800">
            {ingredientName}
          </Text>
        </HStack>
        <Text ml={'$2'} fontSize={'$xs'} color="$coolGray800">
          160g
        </Text>
      </HStack>
    </Box>
  );
};

export default IngredientCard;
