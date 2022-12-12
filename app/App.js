import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './src/components/Header';
import {ImageBackground} from 'react-native';
import styled from 'styled-components';

const Stack = createNativeStackNavigator();

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <StyledBackground source={require('./src/assets/background.jpg')}>
      <NavigationContainer theme={MyTheme}>
        <Header />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </StyledBackground>
  );
};

const StyledBackground = styled.ImageBackground`
  flex: 1;
`;

export default App;
