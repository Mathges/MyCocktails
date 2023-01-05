import React, {useState} from 'react';
import {View} from 'react-native';
import AddIngredientButton from '../../buttons/AddIngredientButton/AddIngredientButton';

import {StyledInput, StyledLabel} from './style';

const AddIngredientInput = () => {
  const [ingredient, setIngredient] = useState('');

  return (
    <View>
      <StyledLabel>Ingredients</StyledLabel>
      <StyledInput
        onChangeText={text => {
          setIngredient(text);
        }}
      />
      <AddIngredientButton ingredient={ingredient} />
    </View>
  );
};

export default AddIngredientInput;
