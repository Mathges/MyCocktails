import React, {useContext} from 'react';
import {FlatList, View, Text} from 'react-native';
import {CreateCocktailContext} from '../../utils/Contexts';

import IngredientListItem from './IngredientListItem';
import {ListLabel} from './style';

const IngredientList = () => {
  const {cocktail} = useContext(CreateCocktailContext);

  return (
    <View>
      <ListLabel>Ingredient List</ListLabel>
      <FlatList
        data={cocktail.ingredients}
        renderItem={({item, index}) => (
          <IngredientListItem item={item} index={index} />
        )}
        // keyExtractor={({_, index}) => index}
      />
    </View>
  );
};

export default IngredientList;
