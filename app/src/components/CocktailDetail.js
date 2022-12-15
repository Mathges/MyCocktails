import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

const CocktailDetail = cocktail => {
  return (
    <CardContainer>
      <DetailCard>
        <StyledText>{cocktail.strDrink}</StyledText>
        <Image
          source={{uri: cocktail.strDrinkThumb}}
          style={{width: 250, height: 250}}
        />
      </DetailCard>
    </CardContainer>
  );
};
const CardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailCard = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  width: 75%;
`;
const StyledText = styled.Text`
  color: #fff;
  font-size: 40px;
`;

export default CocktailDetail;
