import React from 'react';
import {View} from 'react-native';

import UserCocktailNameInput from '../../components/inputs/UserCocktailNameInput/UserCocktailNameInput';
import AddIngredientInput from '../../components/inputs/AddIngredientInput/AddIngredientInput';
import IngredientList from '../../components/CreateCocktailIngredientList/IngredientList';
import RecipeInput from '../../components/inputs/RecipeInput/RecipeInput';
import CreateCocktailButton from '../../components/buttons/CreateCocktailButton/CreateCocktailButton';

import ScreenContainer from './style';

const CreatePersonalCocktails = () => {
  return (
    <ScreenContainer>
      <UserCocktailNameInput />
      <AddIngredientInput />
      <IngredientList />
      <RecipeInput />
      <CreateCocktailButton />
    </ScreenContainer>
  );
};

export default CreatePersonalCocktails;
