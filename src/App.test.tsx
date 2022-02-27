import React from 'react';
import { render, waitFor } from './utils/test-utils';
import { transformRestaurants } from './services/restaurant-api';
import App, { AppProps } from './App';

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

const props: AppProps = {
  rootTag: '1',
  version: '1',
};

jest.mock('./components/TopBar', () => ({ TopBar: () => 'TopBar' }));

test('<App />', async () => {
  getRestaurantsMock();

  const { debug } = render(<App {...props} />);

  await waitFor(() => {
    debug();
    expect(getRestaurantsMock).toHaveBeenCalledTimes(1);
  });
});
