import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import getStorageCocktails from '../../utils/asyncStorage';
import styled from 'styled-components';
import {UserCocktailsContext} from '../../utils/Contexts';

const PersonalCocktails = () => {
  const {userCocktails, setUserCocktails} = useContext(UserCocktailsContext);

  useEffect(() => {
    getStorageCocktails().then(response => setUserCocktails(response));
  }, [setUserCocktails]);
  console.log(userCocktails);

  return ;
};

const StyledText = styled.Text`
  background-color: rgba(255, 255, 255, 0.3);
`;

export default PersonalCocktails;
