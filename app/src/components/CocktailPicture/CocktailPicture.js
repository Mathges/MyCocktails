import React from 'react';
import Picture from './style';

const CocktailPicture = props => {
  return (
    <Picture
      source={{uri: props.image}}
      width={props.width}
      height={props.height}
    />
  );
};

export default CocktailPicture;
