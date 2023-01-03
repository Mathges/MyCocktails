import React, {useContext} from 'react';
import {Text} from 'react-native';
import {CreateCocktailContext} from '../../../utils/Contexts';

import RemoveButton from './style';

const RemoveIngredient = props => {
  const {cocktail, setCocktail} = useContext(CreateCocktailContext);

  return (
    <RemoveButton
      onPress={() => {
        const array = cocktail.ingredients.filter(
          (_, index) => index !== props.index,
        );
        setCocktail({
          ...cocktail,
          ingredients: array,
        });
      }}>
      <Text>Remove</Text>
    </RemoveButton>
  );
};

export default RemoveIngredient;
