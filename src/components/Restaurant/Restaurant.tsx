import React from 'react';
import { Linking, Pressable } from 'react-native';

import { ListItemWrapper, NameContainer } from './Restaurant.styles';
import { Title } from '../';
import { RestaurantType } from '../../services/restaurant-api';
type RestaurantProps = {
  restaurant: RestaurantType;
};

const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <ListItemWrapper>
      <Pressable onPress={() => Linking.openURL(restaurant.url)}>
        <NameContainer>
          <Title>{restaurant.name}</Title>
        </NameContainer>
      </Pressable>
      <Title element="TitleM">{restaurant.geo.address.streetAddress}</Title>
      <Title element="TitleM">{restaurant.geo.address.addressLocality}</Title>
      <Title element="TitleM">{restaurant.geo.address.postalCode}</Title>
    </ListItemWrapper>
  );
};

export default Restaurant;
