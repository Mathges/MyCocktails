import styled from 'styled-components';

const CreateButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.7);
  width: 125px;
  height: 40px;
  display: flex;
  margin: auto;
  border-radius: 20px;
`;

const ButtonLabel = styled.Text`
  font-size: 22px;
  color: black;
  font-weight: bold;
  margin: auto;
`;
export {CreateButton, ButtonLabel};
