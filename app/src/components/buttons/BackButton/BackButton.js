import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, StyledText} from './style';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.goBack()}>
      <StyledText>Go back</StyledText>
    </Button>
  );
};

export default BackButton;
