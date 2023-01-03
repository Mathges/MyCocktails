import React, {useContext} from 'react';
import { Text } from 'react-native';
import {CreateCocktailContext} from '../../../utils/Contexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CreateButton from './style';

const CreateCocktail = () => {
  const {cocktail} = useContext(CreateCocktailContext);

  return (
    <CreateButton
      onPress={async () => {
        await AsyncStorage.setItem(`${cocktail.name}`, cocktail);
      }}>
      <Text>Create</Text>
    </CreateButton>
  );
};

export default CreateCocktail;
