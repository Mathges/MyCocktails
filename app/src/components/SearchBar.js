import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Fontisto from 'react-native-vector-icons/Fontisto';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  function fetchApi(term) {
    try {
      axios
        .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        .then(response => {
          console.log(response.data.drinks);
          setCocktails(response.data.drinks);
          console.log(cocktails);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledSearchArea>
      <StyledInput onChangeText={text => setSearchTerm(text)} />
      <StyledButton onPress={() => fetchApi(searchTerm)}>
        <Fontisto name="search" size={30} color="white" />
      </StyledButton>
    </StyledSearchArea>
  );
};

const StyledSearchArea = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  width: 200px;
  max-height: 60px;
  border-radius: 30px;
  margin-top: 10px;
`;

const StyledInput = styled.TextInput`
  max-width: 160px;
  padding: 10px;
  font-size: 20px;
`;

const StyledButton = styled.TouchableOpacity`
  margin: 10px;
  position: absolute;
  right: 0px;
`;
export default SearchBar;
