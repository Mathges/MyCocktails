import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import getStorageCocktails from '../../utils/asyncStorage';
import styled from 'styled-components';
import {UserCocktailsContext} from '../../utils/Contexts';
import UserCocktailsList from '../../components/UserCocktailsList/UserCocktailsList';

const PersonalCocktails = () => {
  const {userCocktails, setUserCocktails} = useContext(UserCocktailsContext);

  useEffect(() => {
    // useEffect accepts Promises but not internal asynchronicity (await)
    // lost a couple hours on this :(
    getStorageCocktails().then(response => setUserCocktails(response));
  }, [setUserCocktails]);

  return <UserCocktailsList />;
};

export default PersonalCocktails;
