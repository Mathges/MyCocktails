import React, {useContext, useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {StyledSearchArea, StyledInput, StyledButton} from './style';

import getCocktailsByName from '../../utils/apiRequests';
import ApiCocktailsContext from '../../utils/Contexts';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {cocktails, setCocktails} = useContext(ApiCocktailsContext);

  return (
    <StyledSearchArea>
      <StyledInput onChangeText={text => setSearchTerm(text)} />
      <StyledButton
        onPress={() => {
          console.log('before: ', cocktails);
          setCocktails(getCocktailsByName(searchTerm));
          console.log('after: ', cocktails);
        }}>
        <Fontisto name="search" size={30} color="white" />
      </StyledButton>
    </StyledSearchArea>
  );
};

export default SearchBar;
