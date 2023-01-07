import React, {useContext} from 'react';
import {View} from 'react-native';
import {CreateCocktailContext} from '../../../utils/Contexts';
import {RecipeLabel, RecipeTextInput} from './style';

const RecipeInput = () => {
  const {cocktail, setCocktail} = useContext(CreateCocktailContext);

  return (
    <View>
      <RecipeLabel>Recipe</RecipeLabel>
      <RecipeTextInput
        multiline={true}
        numberOfLines={10}
        onChangeText={text => {
          setCocktail({...cocktail, recipe: text});
        }}
      />
    </View>
  );
};

export default RecipeInput;
