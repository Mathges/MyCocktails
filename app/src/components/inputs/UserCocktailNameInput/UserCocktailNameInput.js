import React, {useContext} from 'react';
import {View} from 'react-native';
import {CreateCocktailContext} from '../../../utils/Contexts';

import {NameInput, NameInputLabel, InputContainer} from './style';

const UserCocktailNameInput = () => {
  const {cocktail, setCocktail} = useContext(CreateCocktailContext);
  return (
    <InputContainer>
      <NameInputLabel>Name</NameInputLabel>
      <NameInput
        onChangeText={text => {
          setCocktail({...cocktail, name: text});
        }}
      />
    </InputContainer>
  );
};

export default UserCocktailNameInput;
