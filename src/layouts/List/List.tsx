import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaViewComponent } from './List.styles';

type ListProps = {
  children: React.ReactNode;
};

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <SafeAreaViewComponent edges={['top', 'left', 'right']}>
      <StatusBar barStyle={'light-content'} />
      {children}
    </SafeAreaViewComponent>
  );
};

export default List;
