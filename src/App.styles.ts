import { View } from 'react-native';
import styled from 'styled-components';

export const PageHeader = styled(View)<PageHeaderProps>`
  padding: 0 ${({ theme }) => theme?.spacing?.s5?.s};
  padding-bottom: ${props => props.theme?.spacing?.m2?.s};
  background-color: ${({ theme }) => theme?.colours?.background01};
  border-bottom-width: ${({ expanded }) => (expanded ? '0px' : '1px')};
  border-color: ${({ theme }) => theme?.colours?.background03};
`;

type PageHeaderProps = {
  expanded?: boolean;
};

export const FlatListContainer = styled(View)`
  flex: 1;
`;

export const FixedContainer = styled(View)`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: ${props => props?.theme?.spacing?.s5?.s};
  right: ${props => props?.theme?.spacing?.s5?.s};
  border-radius: 999px;
  background-color: ${({ theme }) => theme?.colours?.tint02};
`;

export const ButtonWrapper = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;
