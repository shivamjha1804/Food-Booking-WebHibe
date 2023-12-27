//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import SignIn from '../Screens/Auth/SignIn';
import Slider from '../Screens/Auth/Slider';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Onbroding'
            screenOptions={{
                headerShown: false,
            }}
        >


            <Stack.Screen
                name="Slider"
                component={Slider}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
