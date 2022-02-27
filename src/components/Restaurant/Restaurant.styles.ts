import { View } from 'react-native';
import styled from 'styled-components';

export const ListItemWrapper = styled(View)`
  box-sizing: border-box;
  padding: ${props => props.theme?.spacing?.s5?.s};
  margin: ${props => props.theme?.spacing?.s5?.s};
  background-color: ${({ theme }) => theme?.colours?.background02};
  position: relative;
  border: 1px solid ${({ theme }) => theme?.colours?.tint02};
`;

export const NameContainer = styled(View)`
  margin-bottom: ${props => props.theme?.spacing?.s5?.s};
`;
