# MyCocktails App

## Summary 

This is about making a simple app about cocktails.  
The app will be split into 2 parts.  
The first one will be about to let user find a cocktail by fetching an external api.  
The second one will be about integrate the possibility for the user to create and retrieve his own cocktails recipes.  

## First part 

On this part, the user will be allowed to fetch an external (api)[https://www.thecocktaildb.com/api.php] to find some cocktails recipe.  
He will can do this thanks to a search bar that will fetch the api by cocktail names.
Then , the user will can click on a result to display details about the cocktail.  
  
*Request by name example* www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita  
  
Axios will be used to fetch datas.  
The data retrieves will need some format.  

This part should be deliver around 19th december.

## Second part

The second part is about including a possibility for the user to create his own recipes.
To do that, we'll need a page to create cocktails, and another one to manage (edit, deletion, or just take a look at a cocktail).

To modify the cocktails, there is 2 possibilities the same page than 'details' will be used but will be transformed as a for, or we redirect to the creation page, that is pre-filled with existing cocktail informations.

Personal cocktails will be stored in localstorage.