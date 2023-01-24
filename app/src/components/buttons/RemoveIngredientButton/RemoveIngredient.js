import React, {useContext} from 'react';
import {CreateCocktailContext} from '../../../utils/Contexts';

import {RemoveButton, ButtonLabel} from './style';

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
      <ButtonLabel>Remove</ButtonLabel>
    </RemoveButton>
  );
};

export default RemoveIngredient;
