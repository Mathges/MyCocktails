import React, {useContext} from 'react';
import {Text} from 'react-native';
import {CreateCocktailContext} from '../../../utils/Contexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CreateButton from './style';

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
      <Text>Create</Text>
    </CreateButton>
  );
};

export default CreateCocktailButton;
