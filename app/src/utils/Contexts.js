import React, {createContext} from 'react';

const ApiCocktailsContext = createContext({
  cocktails: [],
  useCocktails: () => {},
});

const CreateCocktailContext = createContext({
  cocktail: {
    name: '',
    ingredients: [],
    recipe: '',
  },
  useCocktails: () => {},
});

const UserCocktailsContext = createContext({
  userCocktails: [],
  useUserCocktails: () => {},
});

export {ApiCocktailsContext, CreateCocktailContext, UserCocktailsContext};
