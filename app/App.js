import React, {useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import styled from 'styled-components';

import Home from './src/screens/Home/Home';
import PersonalCocktailsScreen from './src/screens/PersonalCocktails/PersonalCocktailsScreen';
import CreatePersonalCocktails from './src/screens/CreatePersonalCocktails/CreatePersonalCocktails';
import Header from './src/components/Header/Header';

//import DefaultStyle from './DefaultStyle';

import {ApiCocktailsContext, CreateCocktailContext} from './src/utils/Contexts';

const Drawer = createDrawerNavigator();

const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktail, setCocktail] = useState({
    name: '',
    ingredients: [],
    recipe: '',
  });

  const createCocktail = {cocktail, setCocktail};
  const apiCocktails = {cocktails, setCocktails};

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <ApiCocktailsContext.Provider value={apiCocktails}>
      <CreateCocktailContext.Provider value={createCocktail}>
        <StyledBackground source={require('./src/assets/background.jpg')}>
          <NavigationContainer theme={MyTheme}>
            <Header />
            <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
                drawerStyle: {
                  backgroundColor: 'rgba(0,0,0,0)',
                  width: 200,
                  maxHeight: 400,
                },
                drawerContentContainerStyle: {
                  backgroundColor: 'rgba(255,255,255, 0.8)',
                  borderTopLeftRadius: 30,
                  borderBottomLeftRadius: 30,
                },
                drawerLabelStyle: {
                  color: '#000',
                  fontSize: 20,
                },
              }}>
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen
                name="MyCocktails"
                component={PersonalCocktailsScreen}
              />
              <Drawer.Screen
                name="Create One"
                component={CreatePersonalCocktails}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </StyledBackground>
      </CreateCocktailContext.Provider>
    </ApiCocktailsContext.Provider>
  );
};

const StyledBackground = styled.ImageBackground`
  flex: 1;
`;

export default App;
