type Restaurant = {
  geo: Geo;
  name: string;
  url: string;
};

type RestaurantType = Restaurant & { id: string };

type Geo = {
  address: Address;
};

type Address = {
  addressLocality: string;
  postalCode: string;
  streetAddress: string;
};

type GetRestaurantsResponse = {
  data: {
    restaurant: {
      items: Restaurant[];
    };
  };
};
type TransformedGetRestaurantsResponse = RestaurantType[];
export type {
  RestaurantType,
  Geo,
  Address,
  GetRestaurantsResponse,
  TransformedGetRestaurantsResponse,
  Restaurant,
};
