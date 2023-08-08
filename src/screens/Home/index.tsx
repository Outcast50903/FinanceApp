import React from 'react';

import Geolocation from '@react-native-community/geolocation';
import {Container, List} from 'components';
import IndicatorsArray from './indicatorsArray';
import {IndicatorItem} from './Components';

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
