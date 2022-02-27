import React from 'react';
import { Eyebrow, HeadingS, HeadingL, TitleM } from './Title.styles';

type TitleProps = {
  children: React.ReactNode;
  numberOfLines?: number;
  element?: string;
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
}) => {
  const Component = getElementComponent(element);

  return (
    <Component
      {...(numberOfLines && { numberOfLines: numberOfLines })}
      ellipsizeMode="tail"
      accessible={true}
      accessibilityRole="text">
      {children}
    </Component>
  );
};

export default Title;
