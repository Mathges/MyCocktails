import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const PersonalCocktails = () => {
  const navigation = useNavigation();

  return (
    <CreateButton
      onPress={async () => {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiGet(keys).then(response =>
          console.log(response),
        );
      }}>
      <Text>Create Your Cocktail</Text>
    </CreateButton>
  );
};

const CreateButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.5);
`;
export default PersonalCocktails;
