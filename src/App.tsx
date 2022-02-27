import React, { useEffect, useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { FlatList, Pressable, Text, RefreshControl } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { List as ListLayout } from './layouts';
import { TopBar, TopBarHeader, Restaurant, Title } from './components';
import {
  getRestaurants,
  GetRestaurantsResponse,
  RestaurantType,
} from './services/restaurant-api';
import theme from './theme';
import VersionModule from '../VersionModuleAndroid';
import {
  PageHeader,
  FlatListContainer,
  FixedContainer,
  ButtonWrapper,
} from './App.styles';

type AppProps = {
  rootTag: string;
  version: string;
};

function fakeWait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

const App: React.VFC<AppProps> = props => {
  const appVersion = VersionModule
    ? VersionModule?.getConstants().appVersion
    : props.version;
  const [expanded, setExpanded] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GetRestaurantsResponse>();
  const flatListRef = useRef<any>();
  const toTop = () => {
    flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const fetchData = async () => {
    setLoading(true);
    await fakeWait(500);
    getRestaurants().then(res => {
      setData(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <ListLayout>
          <PageHeader expanded={expanded}>
            <TopBar
              expanded={expanded}
              title="Nandos restaurans"
              subtitle={`App version: ${appVersion}`}
              header={
                <TopBarHeader expanded={expanded} title="Nandos restaurans" />
              }
            />
          </PageHeader>
          <FlatListContainer>
            {loading ? (
              <>
                <Title>Skeleton loading...</Title>
                <Title>Skeleton loading...</Title>
                <Title>Skeleton loading...</Title>
                <Title>Skeleton loading...</Title>
                <Title>Skeleton loading...</Title>
                <Title>Skeleton loading...</Title>
              </>
            ) : (
              <>
                <FlatList
                  ref={flatListRef}
                  keyExtractor={item => item.id}
                  data={data}
                  maxToRenderPerBatch={25}
                  initialNumToRender={10}
                  refreshControl={
                    <RefreshControl
                      refreshing={loading}
                      tintColor={theme?.colours?.tint01}
                      colors={[theme?.colours?.tint01]}
                      style={{ backgroundColor: 'transparent' }}
                      onRefresh={fetchData}
                    />
                  }
                  renderItem={({ item }: { item: RestaurantType }) => (
                    <Restaurant restaurant={item} />
                  )}
                  onScroll={({ nativeEvent }: { nativeEvent: any }) => {
                    setExpanded(Math.round(nativeEvent.contentOffset.y) <= 0);
                  }}
                />
                <FixedContainer>
                  <Pressable onPress={toTop}>
                    <ButtonWrapper>
                      <Text>UP</Text>
                    </ButtonWrapper>
                  </Pressable>
                </FixedContainer>
              </>
            )}
          </FlatListContainer>
        </ListLayout>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
