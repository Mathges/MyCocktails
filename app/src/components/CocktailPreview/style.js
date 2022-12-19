import styled from 'styled-components';

const StyledText = styled.Text`
  color: #fff;
  font-size: 25px;
`;

const CocktailCard = styled.View`
  width: 250px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

export {StyledText, CocktailCard};
