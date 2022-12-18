import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import BackButton from './BackButton';

const CocktailDetail = cocktail => {
  const navigation = useNavigation();

  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    const formattedIngredients = [];

    // this one is a bit tricky and dirty i'll need to clarify that
    // for now, i'll just add comments
    // the purpose is to format ingredients with measures
    const formatIngredients = () => {
      // I iniate 2 arrays, 1 for ingredients, 1 for measures
      const ingredients = [];
      const measures = [];

      // I iterate over the objet received, and catch all ingredients/measures to put it in their respective array
      for (const [key, value] of Object.entries(cocktail)) {
        if (key.includes('Ingredient') && value !== null) {
          ingredients.push(value);
        } else if (key.includes('Measure') && value !== null) {
          measures.push(value);
        }
      }

      // Api sometimes will have ingredients without measure
      // This is why the while condition is on ingredient array length
      let count = 0;
      while (count < ingredients.length) {
        // if the measure is truthy, I add it to another array
        if (!!measures[count] !== false) {
          formattedIngredients[count] = `${measures[count]} of ${ingredients[count]}`;
          console.log(formattedIngredients[count]);
        } else {
          // if not, I add only the ingredient
          formattedIngredients[count] = `${ingredients[count]}`;
        }
        count++;
      }
    };

    formatIngredients();
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
const CardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailCard = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  margin-top: 5%;
`;

const CardSection = styled.View`
  width: 85%;
  margin-top: 2%;
`;

const MainTitle = styled.Text`
  color: #fff;
  font-size: 40px;
`;

const Subtitle = styled.Text`
  color: #fff;
  font-size: 30px;
  width: 100%;
`;

const Ingredient = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const Recipe = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export default CocktailDetail;
