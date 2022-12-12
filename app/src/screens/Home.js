import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import CocktailPreview from '../components/CocktailPreview';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <StyledHome>
      <SearchBar />
      <CocktailPreview />
    </StyledHome>
  );
};

const StyledHome = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
