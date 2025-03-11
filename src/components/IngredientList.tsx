import React, {useEffect, useState} from 'react';
import {ArrayIngredients, ArrayOfGrouObjectLike} from '../utils/objectUtil';
import {MealItem} from '../types/meal';
import {Box} from '@gluestack-ui/themed';
import IngredientCard from './IngredientCard';
import {Text} from 'react-native-gesture-handler';

type Props = {
  meal: MealItem | null;
};

const IngredientList = ({meal}: Props) => {
  const [ingredientList, setIngredientList] = useState<ArrayIngredients>([]);

  useEffect(() => {
    if (meal) {
      setIngredientList(ArrayOfGrouObjectLike('strIngredient', meal));
    }
  }, [meal]);
  return (
    <Box gap={'$2'}>
      {ingredientList.length ? (
        ingredientList.map(ingredient => {
          return <IngredientCard ingredientName={ingredient} />;
        })
      ) : (
        <Text> There is no ingredient</Text>
      )}
    </Box>
  );
};

export default IngredientList;
