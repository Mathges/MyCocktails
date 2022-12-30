import React, {useState, useEffect} from 'react';

import CocktailDetail from '../../components/CocktailDetail/CocktailDetail';

import {getCocktailById} from '../../utils/apiRequests';

const CocktailDetails = ({route}) => {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // console.log(route.params.id);
      try {
        const response = await getCocktailById(route.params.id);
        return setCocktail(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [route.params?.id]);

  return <CocktailDetail {...cocktail} />;
};

export default CocktailDetails;
