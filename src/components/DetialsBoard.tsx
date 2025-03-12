import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Text,
  useToken,
  VStack,
} from '@gluestack-ui/themed';
import {MealItem} from '../types/meal';
import Icon from 'react-native-vector-icons/FontAwesome';
import InforIcon from './InforIcon';
import IngredientList from './IngredientList';

type Props = {
  meal: MealItem | null;
};

const safeM = '$8';

const DetialsBoard = ({meal}: Props) => {
  const size = useToken('fontSizes', 'xl');
  const color = useToken('colors', 'yellow500');

  return (
    <Box
      p={safeM}
      pt={'$12'}
      top={-30}
      zIndex={100}
      backgroundColor="white"
      borderTopStartRadius={28}
      borderTopEndRadius={28}>
      <HStack alignItems="center">
        <Box flex={1}>
          <Heading fontWeight={'$semibold'} fontSize={'$2xl'}>
            {meal?.strMeal}
          </Heading>
          <Text fontSize={'$xs'} color={'$coolGray400'}>
            Origin: {meal?.strArea}
          </Text>
        </Box>
        <HStack>
          <Icon name="star" size={size} color={color} />
          <Text fontWeight={'$semibold'} color="coolGray800" ml={'$1'}>
            4.5
          </Text>
        </HStack>
      </HStack>

      <HStack mt={'$4'} gap={'$4'}>
        <InforIcon iconName="clock-o" content="10 mins" />
        <InforIcon iconName="bar-chart-o" content="Medium" />
        <InforIcon iconName="fire" content="512 Cal" />
      </HStack>

      <VStack mt={'$6'}>
        <Heading fontWeight={'$bold'} fontSize={'$lg'}>
          Description
        </Heading>
        <Text fontSize={'$xs'} color={'$blueGray400'} mt={'$3'}>
          {meal?.strInstructions}
        </Text>
      </VStack>

      <VStack mt={'$6'}>
        <Heading fontWeight={'$bold'} fontSize={'$lg'}>
          Incredients
        </Heading>
        <IngredientList meal={meal} />
      </VStack>
    </Box>
  );
};

export default DetialsBoard;
