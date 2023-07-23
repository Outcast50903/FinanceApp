import React from 'react';

import {Container, List} from '../../components';
import IndicatorsArray from './indicatorsArray';
import {IndicatorItem} from './Components';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = () => {
  Geolocation.getCurrentPosition(info => console.tron.log(info));

  return (
    <Container>
      <List<{name: string; value: string}>
        data={IndicatorsArray}
        renderItem={({item}) => <IndicatorItem item={item} />}
      />
    </Container>
  );
};

export default HomeScreen;
