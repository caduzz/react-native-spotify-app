import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import {
  Container,
  Scroller,

  Header,
  HeaderTitle,

} from './styles';

export default () => {
  
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(false);
  }
  
  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header>
          <HeaderTitle>
            Buscar
          </HeaderTitle>
        </Header>
      </Scroller>
    </Container>
  );
}
/*

*/