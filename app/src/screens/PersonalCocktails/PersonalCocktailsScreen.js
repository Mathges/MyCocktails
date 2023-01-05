import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import getStorageCocktails from '../../utils/asyncStorage';
import styled from 'styled-components';
import Test from '../../components/Test';

const PersonalCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = async () => {
    const response = await getStorageCocktails();
    return setCocktails(response);
  };

  useEffect(() => {
    getCocktails();
  }, []);
  console.log(cocktails);
  // TODO: pass personal cocktails as context
  return (
    <SafeAreaView>
      <Test {...cocktails} />
    </SafeAreaView>
  );
};

const StyledText = styled.Text`
  background-color: rgba(255, 255, 255, 0.3);
`;

export default PersonalCocktails;
