import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME_SCREEN} from '~/constants/routes';
import HomeScreen from '~/screens/Home/HomeScreen';

type RootStackParam = {
  [HOME_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParam>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
