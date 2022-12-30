import axios from 'axios';

async function getCocktailsByName(term) {
  return (
    axios
      .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
      //return response.data.drinks;
      .then(response => {
        //console.log(response);
        return response.data.drinks;
      })
  );
}

async function getCocktailById(id) {
  return axios
    .get(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => {
      return response.data.drinks[0];
    });
}

export {getCocktailsByName, getCocktailById};
