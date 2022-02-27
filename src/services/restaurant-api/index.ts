import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {
  GetRestaurantsResponse,
  RestaurantType,
  Restaurant,
  TransformedGetRestaurantsResponse,
} from './types';

const getRestaurants = async (): Promise<
  TransformedGetRestaurantsResponse | undefined
> => {
  const response = await fetch(
    'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json',
  );

  try {
    const results = await response.json();
    const transformedResults = transformRestaurants(results);

    return transformedResults;
  } catch (error) {
    console.log(error);
  }
};

const transformRestaurants = (
  response: GetRestaurantsResponse,
): TransformedGetRestaurantsResponse => {
  return response.data.restaurant.items.map((item: Restaurant) => {
    return {
      ...item,
      id: uuidv4() as string,
    };
  });
};

export { getRestaurants, transformRestaurants };
export type { RestaurantType, TransformedGetRestaurantsResponse };
