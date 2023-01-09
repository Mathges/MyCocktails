import React, {useContext} from 'react';

import {UserCocktailsContext} from '../../../utils/Contexts';

import {RemoveButton, ButtonLabel} from './style';

const RemoveUserCocktailButton = ({cocktailName}) => {
  const {userCocktails, setUserCocktails} = useContext(UserCocktailsContext);

  return (
    <RemoveButton
      onPress={() => {
        const filteredCocktails = userCocktails.filter(
          cocktail => cocktail.name !== cocktailName,
        );
        console.log(filteredCocktails);
        setUserCocktails(filteredCocktails);
      }}>
      <ButtonLabel>Remove</ButtonLabel>
    </RemoveButton>
  );
};

export default RemoveUserCocktailButton;
