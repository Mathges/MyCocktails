import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';

import CocktailDetail from '../../components/CocktailDetail/CocktailDetail';

import {getCocktailById} from '../../utils/apiRequests';

const CocktailDetails = ({route}) => {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCocktailById(route.params.id);
        return setCocktail(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [route.params?.id]);

  return (
    <ScrollView>
      <CocktailDetail {...cocktail} />
    </ScrollView>
  );
};

export default CocktailDetails;
