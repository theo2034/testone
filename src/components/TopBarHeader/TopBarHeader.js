import React from 'react';
import { View } from 'react-native';

import { TopBarHeaderWrapper, TopBarTitleSmall } from './TopBarHeader.styles';

function TopBarHeader({ expanded, title }) {
  return (
    <TopBarHeaderWrapper>
      <View style={{ width: 40 }} />
      {Boolean(title) && expanded === false && (
        <TopBarTitleSmall element="HeadingS" numberOfLines={1}>
          {title}
        </TopBarTitleSmall>
      )}
      <View style={{ width: 40 }} />
    </TopBarHeaderWrapper>
  );
}

export default TopBarHeader;
