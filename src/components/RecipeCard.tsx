import {Box, Card, Image, Text} from '@gluestack-ui/themed';
import React from 'react';
import {MealItem} from '../types/meal';
import {useNavigation} from '@react-navigation/native';
import {TabNavigationProps} from '../types/navigation';
import {TouchableOpacity} from 'react-native';

type Props = {
  meal: MealItem;
};

const safeM = '$4';

function RecipeCard({meal}: Props) {
  const navigation = useNavigation<TabNavigationProps>();

  const handlePress = () => {
    navigation.navigate('RecipeDetails', {meal});
  };
  return (
    <TouchableOpacity onPress={handlePress}>
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
    </TouchableOpacity>
  );
}

export default RecipeCard;
