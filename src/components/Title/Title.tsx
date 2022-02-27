import React from 'react';
import { Eyebrow, HeadingS, HeadingL, TitleM } from './Title.styles';

export type TitleProps = {
  children: React.ReactNode;
  numberOfLines?: number;
  element?: string;
  testID?: string;
};

const TITLE_VARIATION = {
  HeadingS: 'HeadingS',
  Eyebrow: 'Eyebrow',
  HeadingL: 'HeadingL',
  TitleM: 'TitleM',
};

function getElementComponent(element: string) {
  switch (element) {
    case TITLE_VARIATION.HeadingL:
      return HeadingL;
    case TITLE_VARIATION.HeadingS:
      return HeadingS;
    case TITLE_VARIATION.TitleM:
      return TitleM;
    default:
      return Eyebrow;
  }
}

const Title: React.FC<TitleProps> = ({
  element = 'HeadingS',
  numberOfLines,
  children,
  testID,
}) => {
  const Component = getElementComponent(element);

  return (
    <Component
      {...(numberOfLines && { numberOfLines: numberOfLines })}
      ellipsizeMode="tail"
      accessible={true}
      testID={testID}
      accessibilityRole="text">
      {children}
    </Component>
  );
};

export default Title;
