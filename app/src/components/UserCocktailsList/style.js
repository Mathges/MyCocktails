import styled from 'styled-components';

const StyledText = styled.Text`
  margin-bottom: 10px;
`;

const UserCocktailCard = styled.View`
  width: 70%;
  display: flex;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  margin: 2% auto;
`;

const MainTitle = styled.Text`
  font-size: 35px;
  color: white;
  margin: auto;
`;

const CocktailName = styled.Text`
  font-size: 25px;
  margin: auto;
  color: white;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-left: 1%;
`;

const Ingredient = styled.Text`
  margin-left: 2%;
  color: black;
`;

const Recipe = styled.Text`
  margin-left: 2%;
  color: black;
`;

export {
  StyledText,
  UserCocktailCard,
  CocktailName,
  MainTitle,
  Ingredient,
  Recipe,
  Title,
};
