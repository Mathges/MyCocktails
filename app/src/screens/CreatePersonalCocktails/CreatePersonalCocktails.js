import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styled from 'styled-components';

const CreatePersonalCocktails = () => {
  const [ingredient, setIngredient] = useState('');
  const [cocktail, setCocktail] = useState({
    name: '',
    ingredients: [],
    recipe: '',
  });

  return (
    <View>
      <StyledLabel>Name</StyledLabel>
      <StyledInput
        onChangeText={text => {
          setCocktail({...cocktail, name: text});
        }}
      />

      <StyledLabel>Ingredients</StyledLabel>
      <StyledInput
        onChangeText={text => {
          setIngredient(text);
        }}
      />
      <AddButton
        onPress={() => {
          setCocktail({
            ...cocktail,
            ingredients: [...cocktail.ingredients, ingredient],
          });
        }}>
        <Text>ADD</Text>
      </AddButton>

      <StyledLabel>Ingredient List</StyledLabel>
      <FlatList
        data={cocktail.ingredients}
        renderItem={({item, index}) => (
          <IngredientListItem>
            <Text>{item}</Text>
            <RemoveButton
              onPress={() => {
                const array = cocktail.ingredients.filter(
                  (_, itemIndex) => itemIndex !== index,
                );

                setCocktail({
                  ...cocktail,
                  ingredients: array,
                });
              }}>
              <Text>Remove</Text>
            </RemoveButton>
          </IngredientListItem>
        )}
        keyExtractor={({item, index}) => index}
      />

      <StyledLabel>Recipe</StyledLabel>
      <StyledInput multiline={true} numberOfLines={10} />

      <CreateButton>
        <Text>Create</Text>
      </CreateButton>
    </View>
  );
};

const StyledInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.3);
`;

const StyledLabel = styled.Text`
  color: #fff;
  font-size: 20;
`;

const CreateButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.3);
`;

const AddButton = styled.TouchableOpacity`
  background-color: blueviolet;
`;

const RemoveButton = styled.TouchableOpacity`
  background-color: red;
`;

const IngredientListItem = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  margin-bottom: 5px;
`;
export default CreatePersonalCocktails;
