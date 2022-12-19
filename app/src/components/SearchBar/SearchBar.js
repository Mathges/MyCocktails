import React, {useContext, useState} from 'react';
import axios from 'axios';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {StyledSearchArea, StyledInput, StyledButton} from './style';

import ApiCocktailsContext from '../../utils/Contexts';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {cocktails, setCocktails} = useContext(ApiCocktailsContext);

  function fetchApi(term) {
    try {
      axios
        .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        .then(response => {
          setCocktails(response.data.drinks);
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

export default SearchBar;
