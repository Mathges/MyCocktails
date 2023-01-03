import React, {useContext, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import BasicTextInput from '../../components/inputs/BasicText/BasicText';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddIngredient from '../../components/inputs/AddIngredient/AddIngredient';
import {CreateCocktailContext} from '../../utils/Contexts';
import IngredientList from '../../components/CreateCocktailIngredientList/IngredientList';
import Recipe from '../../components/inputs/RecipeInput/Recipe';
import CreateCocktail from '../../components/buttons/CreateCocktailButton/CreateCocktail';

const CreatePersonalCocktails = () => {
  const {cocktail} = useContext(CreateCocktailContext);

  return (
    <View>
      <BasicTextInput />
      <AddIngredient />
      <IngredientList />
      <Recipe />
      <CreateCocktail />
      {/* <Text style={{color: 'white'}}>{JSON.parse(cocktail)}</Text> */}
    </View>
  );
};

export default CreatePersonalCocktails;
