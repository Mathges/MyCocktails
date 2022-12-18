import React from 'react';
import styled from 'styled-components';

import CocktailPreviewList from '../components/CocktailPreviewList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <StyledHome>
      <SearchBar />
      <CocktailPreviewList />
    </StyledHome>
  );
};

const StyledHome = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
