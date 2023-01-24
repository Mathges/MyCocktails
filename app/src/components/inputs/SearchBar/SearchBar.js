import React, {useContext, useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {StyledSearchArea, StyledInput, StyledButton} from './style';

import {getCocktailsByName} from '../../../utils/apiRequests';
import {ApiCocktailsContext} from '../../../utils/Contexts';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {setCocktails} = useContext(ApiCocktailsContext);

  return (
    <StyledSearchArea>
      <StyledInput onChangeText={text => setSearchTerm(text)} />
      <StyledButton
        onPress={async () => {
          const response = await getCocktailsByName(searchTerm);
          setCocktails(response);
        }}>
        <Fontisto name="search" size={30} color="white" />
      </StyledButton>
    </StyledSearchArea>
  );
};

export default SearchBar;
