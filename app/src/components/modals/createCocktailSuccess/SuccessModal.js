import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SuccessModal = ({modalVisible, setModalVisible}) => {
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(!modalVisible);
    }, 3000);
  }, [modalVisible, setModalVisible]);

  return (
    <View>
      <Text>Heyt there</Text>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessModal;
