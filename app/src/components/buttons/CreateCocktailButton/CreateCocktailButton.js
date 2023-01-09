import React, {useContext, useState} from 'react';
import {View, Modal, TouchableOpacity, Text} from 'react-native';
import {
  CreateCocktailContext,
  UserCocktailsContext,
} from '../../../utils/Contexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SuccessModal from '../../modals/createCocktailSuccess/SuccessModal';
import {CreateButton, ButtonLabel} from './style';

const CreateCocktailButton = () => {
  const {cocktail} = useContext(CreateCocktailContext);
  const {userCocktails} = useContext(UserCocktailsContext);
  const [modalVisible, setModalVisible] = useState(false);

  const createCocktail = () => {
    try {
      AsyncStorage.setItem(
        JSON.stringify(cocktail.name),
        JSON.stringify(cocktail),
      );
      userCocktails.push(cocktail);
      setModalVisible(true);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <View>
      <CreateButton
        onPress={() => {
          createCocktail();
          setModalVisible(true);
        }}>
        <ButtonLabel>Create</ButtonLabel>
      </CreateButton>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SuccessModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Modal>
    </View>
  );
};

export default CreateCocktailButton;
