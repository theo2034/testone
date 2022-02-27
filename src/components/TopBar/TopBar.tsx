import React, { useState, useEffect } from 'react';
import { LayoutAnimation } from 'react-native';
import {
  TopBarHeader,
  TopBarTextWrapper,
  TopBarWrapper,
  TopBarSubTitle,
  TopBarTitle,
  TopBarTitleWrapper,
} from './TopBar.styles';

export type TopBarProps = {
  header?: React.ReactNode;
  title?: string;
  subtitle?: string;
  expanded?: boolean;
};

const TopBar: React.VFC<TopBarProps> = ({
  header = null,
  title = null,
  subtitle = null,
  expanded = null,
}) => {
  const getTitle = () => {
    return (
      <TopBarTextWrapper>
        {subtitle && (
          <TopBarSubTitle testID={subtitle} element="Eyebrow" numberOfLines={1}>
            {subtitle}
          </TopBarSubTitle>
        )}
        {title && (
          <TopBarTitleWrapper>
            <TopBarTitle testID={title} element="HeadingL" numberOfLines={1}>
              {title}
            </TopBarTitle>
          </TopBarTitleWrapper>
        )}
      </TopBarTextWrapper>
    );
  };

  const [exp, setExp] = useState(true);

  useEffect(() => {
    if (exp && !expanded) {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          250,
          LayoutAnimation.Types.easeOut,
          LayoutAnimation.Properties.opacity,
        ),
      );
      setExp(false);
    } else if (!exp && expanded) {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          250,
          LayoutAnimation.Types.easeIn,
          LayoutAnimation.Properties.opacity,
        ),
      );
      setExp(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  return (
    <TopBarWrapper>
      {header && <TopBarHeader testID="TopBarHeader">{header}</TopBarHeader>}
      {exp && <>{Boolean(title || subtitle) && getTitle()}</>}
    </TopBarWrapper>
  );
};

export default TopBar;
