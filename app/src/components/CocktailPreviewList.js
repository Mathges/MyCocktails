import React, {useEffect, useContext} from 'react';
import {FlatList} from 'react-native';
import CocktailPreview from './CocktailPreview';
import ApiCocktailsContext from '../utils/Contexts';

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
