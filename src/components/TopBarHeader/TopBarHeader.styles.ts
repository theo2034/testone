import styled from 'styled-components';
import { View } from 'react-native';
import { Title } from '../';

export const TopBarHeaderWrapper = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopBarTitleSmall = styled(Title)`
  padding-top: ${({ theme }) => theme?.spacing?.s2.s};
  flex: 1;
  text-align: center;
`;
