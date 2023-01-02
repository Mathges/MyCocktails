import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const PersonalCocktails = () => {
  const navigation = useNavigation();

  return (
    <CreateButton onPress={() => navigation.navigate('Create One')}>
      <Text>Create Your Cocktail</Text>
    </CreateButton>
  );
};

const CreateButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.5);
`;
export default PersonalCocktails;
