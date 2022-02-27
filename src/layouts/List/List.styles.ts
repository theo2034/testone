import styled from 'styled-components';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeAreaViewComponent = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme?.colours?.background01};
`;

export const ScrollViewContainer = styled(ScrollView)`
  background-color: ${props => props.theme?.colours?.background01};
  flex: 1;
`;

export const FixedContainer = styled(View)`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: ${props => props?.theme?.spacing?.s5?.s};
  right: ${props => props?.theme?.spacing?.s5?.s};
  border-radius: 999px;
`;
