import axios from 'axios';

import {API_BASEURL} from '@env';

async function getCocktailsByName(term) {
  return axios.get(`${API_BASEURL}search.php?s=${term}`).then(response => {
    return response.data.drinks;
  });
}

async function getCocktailById(id) {
  return axios.get(`${API_BASEURL}lookup.php?i=${id}`).then(response => {
    return response.data.drinks[0];
  });
}

export {getCocktailsByName, getCocktailById};
