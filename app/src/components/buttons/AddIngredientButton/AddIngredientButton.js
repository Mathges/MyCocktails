import React, {useContext} from 'react';
import {Text} from 'react-native';

import {CreateCocktailContext} from '../../../utils/Contexts';

import AddButton from './style';

const AddIngredientButton = props => {
  const {cocktail, setCocktail} = useContext(CreateCocktailContext);

  return (
    <AddButton
      onPress={() => {
        setCocktail({
          ...cocktail,
          ingredients: [...cocktail.ingredients, props.ingredient],
        });
      }}>
      <Text>ADD</Text>
    </AddButton>
  );
};

export default AddIngredientButton;
