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

CocktailDetails component can be refactored and improved. For example make a unique component Section for ingredients and recipe could be a good refacto. But this will need some dynamism.  

Some styles can be improved too. Declaring some app style variables and adding some font.    

Routes can be isolated from app.

Axios call should be isolated too.

Some UX is missing, like loading while requesting api, returning error if there is from api, or a not found component if user is asking for non-existent cocktail.  


### Priority

- Isolate Axios (done) & router
- Make css vars
- Loading component and 404 component
- Better scrollview for cocktail details (done)
- making api BaseURL as env var (done)
- make image component (done)

## 9/01

### Work done 

User can now create cocktails and see them through a list (without pictures)

Some refacto has been done and the recommandations from 19/12 has been integrated.

### Improvements

- Code quality, refacto can be improved, imports should be reorganized
- Router : isolate app routing from App.js
- Feature: modify and delete user cocktails
- Integrate some file loader to let user load picture for his cocktails
- I18n
- Theming: theming is not done (should've been done earlier, the refacto for this one will be big), also adding fonts
- Context: just discovered and made Context.Consumer working, should integrate it everywhere it should be

