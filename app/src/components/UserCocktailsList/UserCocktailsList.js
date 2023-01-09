import React from 'react';
import {FlatList, View} from 'react-native';
import {UserCocktailsContext} from '../../utils/Contexts';

import UserCocktail from './UserCocktail';

import {MainTitle} from './style';

const UserCocktailsList = () => {
  return (
    <View>
      <MainTitle>My Cocktails</MainTitle>
      <UserCocktailsContext.Consumer>
        {value => (
          <FlatList
            data={value.userCocktails}
            renderItem={item => <UserCocktail {...item} />}
            keyExtractor={item => item.name}
          />
        )}
      </UserCocktailsContext.Consumer>
    </View>
  );
};

export default UserCocktailsList;
