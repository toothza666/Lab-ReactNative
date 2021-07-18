import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './Screen/ZipCodeScreen';

const Stack = createStackNavigator();


export default function App() {
 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
 );
}