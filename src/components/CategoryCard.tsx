import {Box, Image, Text} from '@gluestack-ui/themed';
import React from 'react';
import {Category} from '../types/meal';

type Props = {
  category: Category;
};

const CategoryCard: React.FC<Props> = ({category}): React.ReactNode => {
  return (
    <Box
      mx={'$1.5'}
      backgroundColor="white"
      px={'$2'}
      py={'$1'}
      rounded={'$md'}>
      <Image
        source={{
          uri: category.strCategoryThumb,
        }}
        width={40}
        height={40}
        resizeMode="contain"
        alignSelf="center"
        alt={category.strCategory}
      />
      <Text
        textAlign={'center'}
        fontSize={'$xs'}
        mt={'$0.5'}
        numberOfLines={1}
        // ellipsizeMode="tail"
        width={50}>
        {category.strCategory}
      </Text>
    </Box>
  );
};

export default CategoryCard;
