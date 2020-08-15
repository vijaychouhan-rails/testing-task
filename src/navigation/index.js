import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../components/home';
import Profile from '../components/profile';

const Stack = createStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" headerMode={null}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
