import React from 'react';

import StyledHome from './style';

import CocktailPreviewList from '../../components/CocktailPreviewList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
  return (
    <StyledHome>
      <SearchBar />
      <CocktailPreviewList />
    </StyledHome>
  );
};

export default Home;
