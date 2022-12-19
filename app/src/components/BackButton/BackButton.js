import React from 'react';
import {Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from './style';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.goBack()}>
      <Text>Go back</Text>
    </Button>
  );
};

export default BackButton;
