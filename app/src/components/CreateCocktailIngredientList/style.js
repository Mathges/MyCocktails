import styled from 'styled-components';

const ListItem = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  height: 30px;
  border-radius: 8px;
`;

const IngredientName = styled.Text`
  width: 80%;
  font-size: 20px;
  color: white;
  padding-left: 5px;
`;

const ListLabel = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-left: 10px;
`;

export {ListItem, ListLabel, IngredientName};
