import React from 'react';
import {Text} from 'react-native';

import RemoveIngredient from '../buttons/RemoveIngredientButton/RemoveIngredient';

import {StyledIngredientListItem} from './style';

const IngredientListItem = ({...props}) => {
  return (
    <StyledIngredientListItem>
      <Text>{props.item}</Text>
      <RemoveIngredient index={props.index} />
    </StyledIngredientListItem>
  );
};

export default IngredientListItem;
