import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './screens/Home';
// import RecipeDetials from './screens/RecipeDetails';
import {RootTabParamList} from './types/navigation';
import RecipeDetails from './screens/RecipeDetails';
import RecipeDetialsButton from './utils/bottomBarItems/RecipeDetialsButton';

const Tab = createBottomTabNavigator<RootTabParamList>();

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarShowLabel: false,
        // headerShown: false,
        animation: 'shift',
      }}>
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
          tabBarButton: props => <RecipeDetialsButton {...props} />,
          headerShown: false,
          tabBarLabel: 'Recipe',
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
