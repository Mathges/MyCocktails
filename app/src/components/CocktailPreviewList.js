import React from 'react';
import {FlatList} from 'react-native';
import CocktailPreview from './CocktailPreview';

const CocktailPreviewList = (cocktails) => {
  return (
    <FlatList
      data={cocktails}
      renderItem={CocktailPreview}
      keyExtractor={item => item.id}
    />
  );
};

export default CocktailPreviewList;
