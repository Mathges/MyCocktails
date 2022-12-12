import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Fontisto from 'react-native-vector-icons/Fontisto';

const MenuBurger = () => {
  return (
    <TouchableOpacity>
      <Fontisto name="nav-icon-a" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default MenuBurger;
