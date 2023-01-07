import React, {useState} from 'react';
import AddIngredientButton from '../../buttons/AddIngredientButton/AddIngredientButton';

import {IngredientLabel, IngredientInput, IngredientContainer} from './style';

const AddIngredientInput = () => {
  const [ingredient, setIngredient] = useState('');

  return (
    <IngredientContainer>
      <IngredientLabel>Ingredients</IngredientLabel>
      <IngredientInput
        onChangeText={text => {
          setIngredient(text);
        }}
        placeholder='put ingredients with measures'
      />
      <AddIngredientButton ingredient={ingredient} />
    </IngredientContainer>
  );
};

export default AddIngredientInput;
