import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components';

const Test = cocktails => {
  return (
    <FlatList
      data={cocktails}
      renderItem={item => <StyledText>{item.name}</StyledText>}
    />
  );
};

const StyledText = styled.Text`
  background-color: rgba(255, 255, 255, 0.3);
`;

export default Test;
