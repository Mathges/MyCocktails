import React, {useState} from 'react';
import {View} from 'react-native';
import AddIngredientButton from '../../buttons/AddIngredientButton/AddIngredientButton';

import {StyledInput, StyledLabel} from './style';

const AddIngredient = () => {
  const [ingredient, setIngredient] = useState('');

  return (
    <View>
      <StyledLabel>Ingredients</StyledLabel>
      <StyledInput
        onChangeText={text => {
          setIngredient(text);
          console.log(ingredient);
        }}
      />
      <AddIngredientButton ingredient={ingredient} />
    </View>
  );
};

export default AddIngredient;
