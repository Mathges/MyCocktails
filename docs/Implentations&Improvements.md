# Summary of work done

## 19/12

For this date here is a summary of done work, and clues for improvements.

### Work done

The API fetching is done, and a list of search result is displayed.  
CocktailDetails are accessible by clicking a result.  
Objectives are completed but can be improved.  

### Improvements

The function to format ingredients of API response can be improved. It's a bit dirty even if functionnal. Removing the 2 arrays at beggining maybe be a solution to make it more readable and comprehensive.  

The ScrollView implementation isn't good, i'll need to figure out for a better implementation.  

CocktailDetails component can be refactored and improved. For example make a unique component Section for ingredients and recipe could be a good refacto.  

Some styles can be improved too. Declaring some app style variables and adding some font.    

Routes can be isolated from app.  

Some UX is missing, like loading while requesting api, returning error if there is from api, or a not found page if user is asking for non-existent cocktail.  
