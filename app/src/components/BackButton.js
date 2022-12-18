import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.goBack()}>
      <Text>Go back</Text>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: 25%;
  height: 3%;
  margin-top: 2%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;

export default BackButton;
