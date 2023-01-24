import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CocktailDetails from '../CocktailDetails/CocktailDetails';
import CocktailList from '../CocktailList/CocktailList';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      initialRoutename="CocktailList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CocktailList" component={CocktailList} />
      <Stack.Screen name="CocktailDetails" component={CocktailDetails} />
    </Stack.Navigator>
  );
};

export default Home;
