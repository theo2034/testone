import styled from 'styled-components';
import { View } from 'react-native';
import { Title } from '../';

export const TopBarHeader = styled(View)``;

export const TopBarTextWrapper = styled(View)`
  padding-top: ${props => props.theme?.spacing?.s4.s};
`;

export const TopBarTitleWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const TopBarTitle = styled(Title)`
  padding-right: ${props => props.theme?.spacing?.s4.s};
  flex: 1;
`;
export const TopBarSubTitle = styled(Title)`
  color: ${props => props.theme?.colours?.grey02};
  margin-bottom: ${props => props.theme?.spacing?.s2.s};
`;

export const TopBarWrapper = styled(View)`
  padding-top: ${props => props.theme?.spacing?.s3.s};
  padding-bottom: ${props => props.theme?.spacing?.s3.s};
`;

export const TopBarContent = styled(View)`
  margin-top: 10px;
`;
