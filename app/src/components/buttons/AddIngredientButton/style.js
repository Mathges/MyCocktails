import styled from 'styled-components';

const AddButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.7);
  width: 100px;
  height: 35px;
  display: flex;
  margin: auto;
  border-radius: 20px;
`;

const ButtonLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: auto;
`;

export {AddButton, ButtonLabel};
