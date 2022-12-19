import styled from 'styled-components';

const StyledHeader = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const StyledIdentity = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`;

const MainTitle = styled.Text`
  color: white;
  font-size: 30px;
  margin-left: 10px;
`;

export {StyledHeader, StyledIdentity, MainTitle};
