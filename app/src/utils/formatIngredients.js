// this one is a bit tricky and dirty i'll need to clarify that
// for now, i'll just add comments
// the purpose is to format ingredients with measures
const formatIngredients = cocktail => {
  // I iniate 3 arrays, 1 for ingredients, 1 for measures, and 1 for returning the whole thing
  const ingredients = [];
  const measures = [];
  const formattedIngredients = [];

  // I iterate over the objet received, and catch all ingredients/measures to put it in their respective array
  for (const [key, value] of Object.entries(cocktail)) {
    if (key.includes('Ingredient') && value !== null) {
      ingredients.push(value);
    } else if (key.includes('Measure') && value !== null) {
      console.log('measure: ', value);
      measures.push(value);
    }
  }

  // Api sometimes will have ingredients without measure
  // This is why the while condition is on ingredient array length
  let count = 0;
  while (count < ingredients.length) {
    // if the measure is truthy, I add it to another array
    if (!!measures[count] !== false) {
      formattedIngredients[
        count
      ] = `${measures[count]} of ${ingredients[count]}`;
      console.log(formattedIngredients[count]);
    } else {
      // if not, I add only the ingredient
      formattedIngredients[count] = `${ingredients[count]}`;
    }
    count++;
  }

  return formattedIngredients;
};

export default formatIngredients;
