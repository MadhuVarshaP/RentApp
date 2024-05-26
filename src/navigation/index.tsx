import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Description from '../screens/Description';
import List from '../screens/List';
import NearHouse from '../screens/NearHouse';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="description" component={Description} />
        <Stack.Screen name="list" component={List} />
        <Stack.Screen name="nearhouse" component={NearHouse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
