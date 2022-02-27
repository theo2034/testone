import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { GetRestaurantsResponse, RestaurantType, Address } from './types';

const getRestaurants = async (): Promise<GetRestaurantsResponse | void> => {
  const response = await fetch(
    'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json',
  );

  try {
    const results = await response.json();
    const transformedResults = transformRestaurants(
      results.data.restaurant.items,
    );

    return transformedResults;
  } catch (error) {
    console.log(error);
  }
};

const transformRestaurants = (data: RestaurantType[]) => {
  return data.map((item: RestaurantType) => {
    return {
      ...item,
      id: uuidv4() as string,
    };
  });
};

export { getRestaurants };
export type { RestaurantType, Address };
