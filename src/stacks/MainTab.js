import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators } from '@react-navigation/stack';

import CustomTabBar from '../components/CustomTabBar'

import Inicio from '../sreens/Inicio/';
import Buscar from '../sreens/Buscar/';
import Favoritos from '../sreens/Favoritos/';
import Premium from '../sreens/Premium/';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator 
        tabBar={props=> <CustomTabBar { ...props } />}
        initialRouteName="Inicio"
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'vertical',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        
    >
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Buscar" component={Buscar} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Premium" component={Premium} />
    </Tab.Navigator>
)