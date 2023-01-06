import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {UserCocktailsContext} from '../../utils/Contexts';

import UserCocktail from './UserCocktail';

const UserCocktailsList = () => {
  return (
    <UserCocktailsContext.Consumer>
      {value => (
        <FlatList
          data={value.userCocktails}
          renderItem={item => <UserCocktail {...item} />}
          keyExtractor={item => item.name}
        />
      )}
    </UserCocktailsContext.Consumer>
  );
};

export default UserCocktailsList;
