import React from 'react';
import {Pressable} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootTabParamList} from '../../types/navigation';

const RecipeDetialsButton = (props: any) => {
  const route = useRoute<RouteProp<RootTabParamList, 'RecipeDetails'>>();
  return <Pressable {...props} disabled={route.params?.meal ? false : true} />;
};

export default RecipeDetialsButton;
