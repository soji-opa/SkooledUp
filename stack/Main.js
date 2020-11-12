import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createStackNavigator();

function Main() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="MainPage"
        options={{headerShown: false}}
        component={DrawerNavigator}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;