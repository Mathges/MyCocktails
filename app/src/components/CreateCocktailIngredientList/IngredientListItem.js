import React from 'react';

import RemoveIngredient from '../buttons/RemoveIngredientButton/RemoveIngredient';

import {ListItem, IngredientName} from './style';

const IngredientListItem = ({...props}) => {
  return (
    <ListItem>
      <IngredientName>{props.item}</IngredientName>
      <RemoveIngredient index={props.index} />
    </ListItem>
  );
};

export default IngredientListItem;
