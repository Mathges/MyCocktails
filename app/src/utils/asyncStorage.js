import AsyncStorage from '@react-native-async-storage/async-storage';

const getStorageCocktails = async () => {
  const cocktails = [];
  const keys = await AsyncStorage.getAllKeys();
  const cocktailsToParse = await AsyncStorage.multiGet(keys);
  for (const cocktail of cocktailsToParse) {
    const parsed = JSON.parse(cocktail[1]);
    cocktails.push(parsed);
  }
  return cocktails;
};

export default getStorageCocktails;
