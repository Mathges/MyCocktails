import styled from 'styled-components';

const Button = styled.TouchableOpacity`
  width: 25%;
  height: 5%;
  margin-top: 2%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export {Button, StyledText};
