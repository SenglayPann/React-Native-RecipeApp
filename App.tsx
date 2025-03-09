import './gesture-handler.native';
import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { config } from '@gluestack-ui/config';

import RecipeList from './src/screens/RecipeList';
import RecipeDetials from './src/screens/RecipeDetails';

type RootStackList = {
  RecipeList: undefined,
  RecipeDetails: {
    recipeId: string
  }
};

const Stack = createNativeStackNavigator<RootStackList>();

const App: React.FC = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RecipeList" screenOptions={{
          headerStyle: { backgroundColor: '#ff6f91' },
          }}
        >
          <Stack.Screen name="RecipeList" component={RecipeList}/>
          <Stack.Screen name="RecipeDetails" component={RecipeDetials}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
