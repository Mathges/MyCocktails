import React from 'react';
import {View} from 'react-native';
import BasicTextInput from '../../components/inputs/BasicText/BasicText';
import AddIngredientInput from '../../components/inputs/AddIngredientInput/AddIngredientInput';
import IngredientList from '../../components/CreateCocktailIngredientList/IngredientList';
import RecipeInput from '../../components/inputs/RecipeInput/RecipeInput';
import CreateCocktailButton from '../../components/buttons/CreateCocktailButton/CreateCocktailButton';

const CreatePersonalCocktails = () => {
  return (
    <View>
      <BasicTextInput />
      <AddIngredientInput />
      <IngredientList />
      <RecipeInput />
      <CreateCocktailButton />
    </View>
  );
};

export default CreatePersonalCocktails;
