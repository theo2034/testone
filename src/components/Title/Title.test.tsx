import React from 'react';
import { render } from '@testing-library/react-native';
import Title, { TitleProps } from './Title';

const props: TitleProps = {
  children: 'TITLE',
  numberOfLines: 1,
  testID: 'TITLE',
};

test('<Title />', () => {
  const { getByText, getByTestId } = render(<Title {...props} />);

  expect(getByText('TITLE')).not.toBeNull();
  expect(getByTestId('TITLE').props.numberOfLines).toBe(1);
});
