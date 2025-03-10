import React from 'react';
import {Text} from 'react-native-gesture-handler';
import {RootTabParamList} from '../types/navigation';
import {RouteProp, useRoute} from '@react-navigation/native';

const RecipeDetails = () => {
  const route = useRoute<RouteProp<RootTabParamList, 'RecipeDetails'>>();
  console.log(route.params);
  return <Text>hello {JSON.stringify(route.params.meal)}</Text>;
};

export default RecipeDetails;
