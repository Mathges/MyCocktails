import React from 'react';
import {View} from 'react-native';

import {StyledText} from './style';

const UserCocktail = ({item}) => {
  // mapping ingredients array because can't use FlatList
  // ingredients is array of strings, FlatList only usable on objects
  const ingredientList = item.ingredients.map(ingredient => (
    <StyledText>{ingredient}</StyledText>
  ));

  return (
    <View>
      <StyledText>{item.name}</StyledText>
      {ingredientList}
      <StyledText>{item.recipe}</StyledText>
    </View>
  );
};

export default UserCocktail;
