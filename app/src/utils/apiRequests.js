import axios from 'axios';

async function getCocktailsByName(term) {
  console.log('term:', term);
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

export default getCocktailsByName;
