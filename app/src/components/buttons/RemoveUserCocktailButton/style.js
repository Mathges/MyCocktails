import styled from 'styled-components';

const RemoveButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: 8px;
  width: 40%;
  margin: 2% auto;
`;
const ButtonLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  margin: auto;
`;

export {RemoveButton, ButtonLabel};
