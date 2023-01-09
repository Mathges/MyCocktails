import React from 'react';

import RemoveUserCocktailButton from '../buttons/RemoveUserCocktailButton/RemoveUserCocktailButton';

import {
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
      <RemoveUserCocktailButton cocktailName={item.name} />
    </UserCocktailCard>
  );
};

export default UserCocktail;
