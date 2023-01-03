import React, {useContext} from 'react';
import {View} from 'react-native';
import {CreateCocktailContext} from '../../../utils/Contexts';

import {StyledBasicTextInput, StyledBasicTextLabel} from './style';

const BasicTextInput = () => {
  const {cocktail, setCocktail} = useContext(CreateCocktailContext);
  return (
    <View>
      <StyledBasicTextLabel>Name</StyledBasicTextLabel>
      <StyledBasicTextInput
        onChangeText={text => {
          setCocktail({...cocktail, name: text});
        }}
      />
    </View>
  );
};

export default BasicTextInput;
