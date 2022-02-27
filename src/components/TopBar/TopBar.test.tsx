import React from 'react';
import { render } from '@testing-library/react-native';
import TopBar, { TopBarProps } from './TopBar';

const props: TopBarProps = {
  header: 'HEADER',
  title: 'TITLE',
  subtitle: 'SUBTITLE',
  expanded: true,
};

test('<TopBar />', () => {
  const { getByTestId } = render(<TopBar {...props} />);

  expect(getByTestId('SUBTITLE').props.children).toBe('SUBTITLE');
  expect(getByTestId('TITLE').props.children).toBe('TITLE');
  expect(getByTestId('TopBarHeader').props.children).not.toBeNull();
});
