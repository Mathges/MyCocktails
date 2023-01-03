import React, {useContext} from 'react';
import {View} from 'react-native';
import {CreateCocktailContext} from '../../../utils/Contexts';
import {StyledLabel, StyledInput} from './style';

const Recipe = () => {
  const {cocktail, setCocktail} = useContext(CreateCocktailContext);

  return (
    <View>
      <StyledLabel>Recipe</StyledLabel>
      <StyledInput
        multiline={true}
        numberOfLines={10}
        onChangeText={text => {
          setCocktail({...cocktail, recipe: text});
        }}
      />
    </View>
  );
};

export default Recipe;
