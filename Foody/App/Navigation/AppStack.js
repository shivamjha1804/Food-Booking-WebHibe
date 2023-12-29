//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Home from '../Screens/App/Home';
import ButtomNavigator from './ButtomNavigator';
import FoodDetail from '../Screens/App/FoodDetails/FoodDetail';
import Cart from '../Screens/App/Cart/Cart';

const Stack = createStackNavigator();

const AppStack = () => {
  // const { login_status } = useSelector(state => state.User)
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen 
        name="ButtomNavigator" 
        component={ButtomNavigator} 
      />

      <Stack.Screen 
        name="FoodDetail" 
        component={FoodDetail} 
      />

      <Stack.Screen 
        name="Cart" 
        component={Cart} 
      />
      
    </Stack.Navigator>
  );
};

export default AppStack;
