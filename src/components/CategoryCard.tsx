import {Card, Image, Text} from '@gluestack-ui/themed';
import React from 'react';
import {Category} from '../types/meal';
import {TouchableOpacity} from 'react-native';

type Props = {
  category: Category;
};

const CategoryCard: React.FC<Props> = ({category}): React.ReactNode => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <Card
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
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryCard;
