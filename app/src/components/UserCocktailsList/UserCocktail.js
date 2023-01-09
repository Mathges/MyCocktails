import React from 'react';
import {ScrollView} from 'react-native';

import {
  StyledText,
  UserCocktailCard,
  CocktailName,
  Ingredient,
  Recipe,
  Title,
} from './style';

const UserCocktail = ({item}) => {
  // mapping ingredients array because can't use FlatList
  // ingredients is array of strings, FlatList only usable on objects
  const ingredientList = item.ingredients.map(ingredient => (
    <Ingredient>- {ingredient}</Ingredient>
  ));

  return (
    <UserCocktailCard>
      <CocktailName>{item.name}</CocktailName>
      <Title>Ingredients</Title>
      {ingredientList}
      <Title>Recipe</Title>
      <Recipe>{item.recipe}</Recipe>
    </UserCocktailCard>
  );
};

export default UserCocktail;
