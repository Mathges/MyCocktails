import React from 'react';
import Picture from './style';

const CocktailPicture = image => {
  return <Picture source={{uri: image.image}} />;
};

export default CocktailPicture;
