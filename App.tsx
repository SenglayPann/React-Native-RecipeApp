import './gesture-handler.native';
import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {config} from '@gluestack-ui/config';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/screens/Home';
// import RecipeDetials from './src/screens/RecipeDetails';
import {RootTabParamList} from './src/types/navigation';
import RecipeDetails from './src/screens/RecipeDetails';

const Tab = createBottomTabNavigator<RootTabParamList>();

const App: React.FC = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={
            {
              // tabBarShowLabel: false,
              // headerShown: false,
            }
          }>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="th-list" size={size} color={color} />
              ),
              title: 'Home',
            }}
          />
          <Tab.Screen
            name="RecipeDetails"
            component={RecipeDetails}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="info" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
