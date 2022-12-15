import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import CocktailDetail from '../components/CocktailDetail';
import axios from 'axios';

const CocktailDetails = ({route}) => {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    console.log(route.params.id);
    try {
      axios
        .get(
          `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${route.params?.id}`,
        )
        .then(response => {
          setCocktail(response.data.drinks[0]);
        });
    } catch (error) {}
  }, [route.params?.id]);

  return <CocktailDetail {...cocktail} />;
};

const StyledText = styled.Text`
  color: #fff;
`;
export default CocktailDetails;
