import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import MenuBurger from '../MenuBurger';

import {StyledHeader, StyledIdentity, MainTitle} from './style';

const Header = () => {
  const navigation = useNavigation();

  return (
    <StyledHeader>
      <StyledIdentity onPress={() => navigation.navigate('Home')}>
        <Fontisto name="cocktail" size={35} color="white" />
        <MainTitle>My Cocktails</MainTitle>
      </StyledIdentity>
      <MenuBurger />
    </StyledHeader>
  );
};

export default Header;
