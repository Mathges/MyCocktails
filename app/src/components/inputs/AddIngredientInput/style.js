import styled from 'styled-components';

const IngredientInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 20px;
  margin-bottom: 1%;
  border-radius: 8px;
`;

const IngredientLabel = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-left: 10px;
`;

const IngredientContainer = styled.View`
  margin-bottom: 3%;
`;

export {IngredientInput, IngredientLabel, IngredientContainer};
