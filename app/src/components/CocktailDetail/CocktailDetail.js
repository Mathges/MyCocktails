import React, {useEffect, useState} from 'react';
import {Image, ScrollView} from 'react-native';

import BackButton from '../BackButton/BackButton';

import formatIngredients from '../../utils/formatIngredients';

import {
  CardContainer,
  DetailCard,
  CardSection,
  MainTitle,
  Subtitle,
  Ingredient,
  Recipe,
} from './style';

const CocktailDetail = cocktail => {
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    const formattedIngredients = formatIngredients(cocktail);

    // there I format the content of the array to transform it as component and put it to the state
    // it will make it easier to render
    setIngredientList(
      formattedIngredients.map(ingredient => (
        <Ingredient>- {ingredient}</Ingredient>
      )),
    );
  }, [cocktail]);

  return (
    <CardContainer>
      <BackButton />
      <ScrollView>
        <DetailCard>
          <MainTitle>{cocktail.strDrink}</MainTitle>
          <Image
            source={{uri: cocktail.strDrinkThumb}}
            style={{width: 250, height: 250}}
          />
          <CardSection>
            <Subtitle>Ingredients</Subtitle>
            {ingredientList}
          </CardSection>
          <CardSection>
            <Subtitle>Recipe</Subtitle>
            <Recipe>{cocktail.strInstructions}</Recipe>
          </CardSection>
        </DetailCard>
      </ScrollView>
    </CardContainer>
  );
};

export default CocktailDetail;
