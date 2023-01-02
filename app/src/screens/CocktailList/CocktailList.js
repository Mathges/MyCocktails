import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import CocktailPreviewList from '../../components/CocktailPreviewList/CocktailPreviewList';

import StyleCocktailList from './style';

const CocktailList = () => {
  return (
    <StyleCocktailList>
      <SearchBar />
      <CocktailPreviewList />
    </StyleCocktailList>
  );
};

export default CocktailList;
