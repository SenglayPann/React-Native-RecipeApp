import {Box, Card, Image, Text} from '@gluestack-ui/themed';
import {Image as RNI} from 'react-native';
import React, {useEffect} from 'react';
import {MealItem} from '../types/meal';
import {useNavigation} from '@react-navigation/native';
import {TabNavigationProps} from '../types/navigation';
import {ActivityIndicator, TouchableOpacity} from 'react-native';

type Props = {
  meal: MealItem;
  isVisibled: boolean;
};

const safeM = '$4';
const cardWidth = 150;

function RecipeCard({meal, isVisibled}: Props) {
  const navigation = useNavigation<TabNavigationProps>();

  const handlePress = () => {
    navigation.navigate('RecipeDetails', {meal});
  };

  useEffect(() => {
    RNI.prefetch(meal.strMealThumb);
  }, [isVisibled]);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Card mx={'$1.5'} p={0} borderRadius={20} width={cardWidth}>
        {isVisibled ? (
          <Image
            source={{
              uri: meal.strMealThumb,
            }}
            width={cardWidth}
            height={200}
            borderRadius={20}
            alt={meal.strMeal}
          />
        ) : (
          <Box
            width={cardWidth}
            height={200}
            backgroundColor="$coolGray200"
            justifyContent="center"
            borderRadius={20}>
            <ActivityIndicator />
          </Box>
        )}
        <Box mx={safeM} my={'$3'} gap={'$1'}>
          <Text
            fontSize={'$md'}
            fontWeight={'$semibold'}
            color="black"
            numberOfLines={1}>
            {meal.strMeal}
          </Text>
          <Text fontSize={'$sm'} numberOfLines={1}>
            Recipe ID: {meal.idMeal}
          </Text>
        </Box>
      </Card>
    </TouchableOpacity>
  );
}

export default RecipeCard;
