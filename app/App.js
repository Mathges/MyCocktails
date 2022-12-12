import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './src/components/Header';
import styled from 'styled-components';
import {ImageBackground} from 'react-native';
import DefaultTheme from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  return (
    <ImageBackground source={require('./src/assets/background.jpg')}>
      <NavigationContainer theme={navTheme}>
        <Header />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

export default App;
