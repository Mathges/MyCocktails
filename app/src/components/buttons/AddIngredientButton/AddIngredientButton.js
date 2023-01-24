import React, {useContext} from 'react';
import {Text} from 'react-native';

import {CreateCocktailContext} from '../../../utils/Contexts';

import {AddButton, ButtonLabel} from './style';

const AddIngredientButton = props => {
  const {cocktail, setCocktail} = useContext(CreateCocktailContext);

  return (
    <AddButton
      onPress={() => {
        if (props.ingredient === '') {
          return;
        }
        setCocktail({
          ...cocktail,
          ingredients: [...cocktail.ingredients, props.ingredient],
        });
      }}>
      <ButtonLabel>ADD</ButtonLabel>
    </AddButton>
  );
};

export default AddIngredientButton;
