import React, {createContext} from 'react';

const ApiCocktailsContext = createContext({
  cocktails: [],
  useCocktails: () => {},
});

export default ApiCocktailsContext;
