import styled from 'styled-components';

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
  border-radius: 15px;
  margin-top: 5%;
  padding: 3%;
`;

const CardSection = styled.View`
  width: 85%;
  margin-top: 2%;
`;

const MainTitle = styled.Text`
  color: #fff;
  font-size: 40px;
`;

const Subtitle = styled.Text`
  color: #fff;
  font-size: 30px;
  width: 100%;
`;

const Ingredient = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const Recipe = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export {
  CardContainer,
  DetailCard,
  CardSection,
  MainTitle,
  Subtitle,
  Ingredient,
  Recipe,
};
