import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';

import MenuBurger from '../MenuBurger';

import {StyledHeader, StyledIdentity, MainTitle} from './style';

const Header = () => {
  return (
    <StyledHeader>
      <StyledIdentity>
        <Fontisto name="cocktail" size={35} color="white" />
        <MainTitle>My Cocktails</MainTitle>
      </StyledIdentity>
      <MenuBurger />
    </StyledHeader>
  );
};

export default Header;
