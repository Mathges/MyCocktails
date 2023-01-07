import React, {useContext} from 'react';
import {CreateCocktailContext} from '../../../utils/Contexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {CreateButton, ButtonLabel} from './style';

const CreateCocktailButton = () => {
  const {cocktail} = useContext(CreateCocktailContext);

  return (
    <CreateButton
      onPress={() => {
        AsyncStorage.setItem(
          JSON.stringify(cocktail.name),
          JSON.stringify(cocktail),
        );
      }}>
      <ButtonLabel>Create</ButtonLabel>
    </CreateButton>
  );
};

export default CreateCocktailButton;
