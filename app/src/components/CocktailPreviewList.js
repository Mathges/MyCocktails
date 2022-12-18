import React, {useContext} from 'react';
import {FlatList} from 'react-native';

import ApiCocktailsContext from '../utils/Contexts';

import CocktailPreview from './CocktailPreview';

const CocktailPreviewList = props => {
  const {cocktails, setCocktails} = useContext(ApiCocktailsContext);

  return (
    <FlatList
      data={cocktails}
      renderItem={props => <CocktailPreview {...props} />}
      keyExtractor={item => item.drinkId}
    />
  );
};

export default CocktailPreviewList;
