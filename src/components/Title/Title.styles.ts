import { Text } from 'react-native';
import styled from 'styled-components';

export const TitleBaseStyle = styled(Text)`
  color: ${props => props.theme?.colours?.grey07};
`;

export const Eyebrow = styled(TitleBaseStyle)`
  font-size: ${props => props.theme?.fontSizes?.eyebrow?.s};
  text-transform: uppercase;
  letter-spacing: 0.8px;
  line-height: ${props => props.theme?.fontSizes?.eyebrow?.s};
`;

export const HeadingL = styled(TitleBaseStyle)`
  font-size: ${props => props.theme?.fontSizes?.headingL?.s};
  line-height: ${props => props.theme?.fontSizes?.headingL?.s};
`;

export const HeadingS = styled(TitleBaseStyle)`
  font-size: ${props => props.theme?.fontSizes?.headingS?.s};
  line-height: ${props => props.theme?.fontSizes?.headingS?.s};
`;

export const TitleM = styled(TitleBaseStyle)`
  font-size: ${props => props.theme?.fontSizes?.titleM?.s};
  letter-spacing: -0.2px;
  line-height: ${props => props.theme?.fontSizes?.titleM?.s};
`;
