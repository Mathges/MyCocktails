import axios from 'axios';

async function getCocktailsByName(term) {
  console.log('term:', term);
  const response = await axios({
    method: 'get',
    url: `https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`,
  });
  return response.data.drinks;
  //   .then(response => {
  //     console.log(response);
  //     return response.data.drinks;
  //   });
}

export default getCocktailsByName;
