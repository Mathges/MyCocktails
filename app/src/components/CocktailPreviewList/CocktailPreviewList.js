import React, {useContext} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import ApiCocktailsContext from '../../utils/Contexts';

import CocktailPreview from '../CocktailPreview/CocktailPreview';

const CocktailPreviewList = () => {
  const {cocktails} = useContext(ApiCocktailsContext);

  return (
    <SafeAreaView>
      <FlatList
        data={cocktails}
        renderItem={props => <CocktailPreview {...props} />}
        keyExtractor={item => item.drinkId}
        contentContainerStyle={{paddingBottom: 128}}
      />
    </SafeAreaView>
  );
};

export default CocktailPreviewList;
