import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {StyledText, CocktailCard} from './style';
import CocktailPicture from '../CocktailPicture/CocktailPicture';

const CocktailPreview = ({item}) => {
  // This one were tough to make functionnal
  // i needed to pass props on flatlist renderItem attribute to make navigation works
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CocktailDetails', {id: item.idDrink})
      }>
      <CocktailCard>
        <CocktailPicture image={item.strDrinkThumb} width={200} height={200} />
        <StyledText>{item.strDrink}</StyledText>
      </CocktailCard>
    </TouchableOpacity>
  );
};

export default CocktailPreview;

/* example of response item
dateModified: "2015-08-18 14:42:59"
idDrink: "11007"
strAlcoholic: "Alcoholic"
strCategory: "Ordinary Drink"
strCreativeCommonsConfirmed: "Yes"
strDrink: "Margarita"
strDrinkAlternate: null
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
strGlass: "Cocktail glass"
strIBA: "Contemporary Classics"
strImageAttribution: "Cocktailmarler"
strImageSource: "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg"
strIngredient1: "Tequila"
strIngredient2: "Triple sec"
strIngredient3: "Lime juice"
strIngredient4: "Salt"
strIngredient5: null
strIngredient6: null
strIngredient7: null
strIngredient8: null
strIngredient9: null
strIngredient10: null
strIngredient11: null
strIngredient12: null
strIngredient13: null
strIngredient14: null
strIngredient15: null
strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
strInstructionsDE: "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben."
strInstructionsES: null
strInstructionsFR: null
strInstructionsIT: "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere."
strInstructionsZH-HANS: null
strInstructionsZH-HANT: null
strMeasure1: "1 1/2 oz "
strMeasure2: "1/2 oz "
strMeasure3: "1 oz "
strMeasure4: null
strMeasure5: null
strMeasure6: null
strMeasure7: null
strMeasure8: null
strMeasure9: null
strMeasure10: null
strMeasure11: null
strMeasure12: null
strMeasure13: null
strMeasure14: null
strMeasure15: null
strTags: "IBA,ContemporaryClassic"
strVideo: null
*/
