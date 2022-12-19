import styled from 'styled-components';

const StyledSearchArea = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  width: 200px;
  max-height: 60px;
  border-radius: 30px;
  margin-top: 10px;
`;

const StyledInput = styled.TextInput`
  max-width: 160px;
  padding: 10px;
  font-size: 20px;
`;

const StyledButton = styled.TouchableOpacity`
  margin: 10px;
  position: absolute;
  right: 0px;
`;

export {StyledSearchArea, StyledInput, StyledButton};
