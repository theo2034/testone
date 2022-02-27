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

type GetRestaurantsResponse = RestaurantType[];
export type { RestaurantType, Geo, Address, GetRestaurantsResponse };
