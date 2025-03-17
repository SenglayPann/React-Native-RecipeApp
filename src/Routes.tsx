import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './screens/Home';
import {RootTabParamList} from './types/navigation';
import RecipeDetails from './screens/RecipeDetails';
import Category from './screens/Category';
// import RecipeDetialsButton from './utils/bottomBarItems/RecipeDetialsButton';

const Tab = createBottomTabNavigator<RootTabParamList>();

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const tabBarIcons = {
  home: ({color, size}: IconProps): React.ReactNode => (
    <Icon name="th-list" size={size} color={color} />
  ),
  recipreDetails: ({color, size}: IconProps): React.ReactNode => (
    <Icon name="info" size={size} color={color} />
  ),
  allCategory: ({color, size}: IconProps): React.ReactNode => (
    <Icon name="th" size={size} color={color} />
  ),
};

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'shift',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: tabBarIcons.home,
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={{
          tabBarIcon: tabBarIcons.recipreDetails,
          // tabBarButton: props => <RecipeDetialsButton {...props} />,
          headerShown: false,
          tabBarLabel: 'Recipe',
          tabBarItemStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: tabBarIcons.allCategory,
          headerShown: false,
          tabBarLabel: 'Categories',
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
