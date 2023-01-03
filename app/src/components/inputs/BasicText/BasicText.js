import React from 'react';

import { BasicTextInput, BasicTextLabel } from './style';

const BasicTextInput = () => {
  return (
    <View>
      <BasicTextLabel>Name</BasicTextLabel>
      <BasicTextInput
        onChangeText={text => {
          setCocktail({...cocktail, name: text});
        }}
      />
    </View>
  );
};

export default BasicTextInput;
