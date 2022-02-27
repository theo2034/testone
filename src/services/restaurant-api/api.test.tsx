import { getRestaurants, transformRestaurants } from './';

jest.mock('./');
const mockedRestaurant = {
  geo: {
    address: {
      addressLocality: 'LOCALITY',
      postalCode: 'POSTAL',
      streetAddress: 'STREET',
    },
  },
  name: 'NAME',
  url: 'hash',
};

const mockResponse = {
  data: {
    restaurant: {
      items: [mockedRestaurant, mockedRestaurant, mockedRestaurant],
    },
  },
};

const getRestaurantsMock = jest
  .fn()
  .mockResolvedValue(transformRestaurants(mockResponse));

test('fetches data', async () => {
});
