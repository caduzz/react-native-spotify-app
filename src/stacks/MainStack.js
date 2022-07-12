import React from "react";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import MainTab from '../stacks/MainTab.js';

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1250,
        damping: 50,
        mass: 2,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    }
}

const closeConfig = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 48,
        mass: 2,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    }
}

export default function MainStack() {
    return(
        <Stack.Navigator
            initialRouteName="MainTab"
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
                gestureEnabled: true,
                gestureDirection: 'vertical',
                transitionSpec:{
                    open: config,
                    close: closeConfig,  
                },
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}
        >
            <Stack.Screen name="MainTab" component={MainTab}/>
        </Stack.Navigator>
    );
};