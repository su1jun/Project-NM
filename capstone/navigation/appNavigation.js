import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ListScreen from './screens/ListScreen';
import { LogBox, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Chat" component={ ChatScreen } />
        <Stack.Screen name="List" component={ ListScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
