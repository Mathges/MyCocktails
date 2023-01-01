import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';

import ApiCocktailsContext from '../../utils/Contexts';

import CocktailList from './style';
import CocktailPreview from '../CocktailPreview/CocktailPreview';

const CocktailPreviewList = () => {
  const {cocktails, setCocktails} = useContext(ApiCocktailsContext);

  return (
    <SafeAreaView>
      <CocktailList
        data={cocktails}
        renderItem={props => <CocktailPreview {...props} />}
        keyExtractor={item => item.drinkId}
      />
    </SafeAreaView>
  );
};

export default CocktailPreviewList;
