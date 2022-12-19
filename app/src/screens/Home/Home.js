import React from 'react';

import CocktailPreviewList from '../../components/CocktailPreviewList/CocktailPreviewList';
import SearchBar from '../../components/SearchBar/SearchBar';

import StyledHome from './style';

const Home = () => {
  return (
    <StyledHome>
      <SearchBar />
      <CocktailPreviewList />
    </StyledHome>
  );
};

export default Home;
