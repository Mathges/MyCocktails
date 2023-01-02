import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

const MenuBurger = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Fontisto name="nav-icon-a" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default MenuBurger;
