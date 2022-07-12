import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import {
  Container,
  Scroller,

  Header,
  HeaderIcon,
  HeaderTitle,

  ScrollMusic,

  LoadingIcon,
} from './styles';
import { Octicons } from '@expo/vector-icons';

import MusicContent from '../../components/MusicContent';

export default () => {

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  
  const [refreshing, setRefreshing] = useState(false);


  useEffect(()=>{
    setList([
      'join', 'reverse', 'sort', 'push', 'pop'
    ])
  }, []);

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
            Tocados recentemente
          </HeaderTitle>
          <HeaderIcon>
            <Octicons size={23} name='gear' color='#fff'/>
          </HeaderIcon>
        </Header>
        {loading &&
          <LoadingIcon size='large' color='#fff'/>
        }
        <ScrollMusic
          alwaysBounceHorizontal={true}
          horizontal={true}
          onScrollEndDrag={false}
          endFillColor='black'
        >
          {list.map((item, k)=>(
            <MusicContent
              key={k}
              data={item}
            />
          ))}
        </ScrollMusic>
      </Scroller>
    </Container>
  );
}
/*

*/