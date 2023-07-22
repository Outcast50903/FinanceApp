import React from 'react';
import {FlatList, Text} from 'react-native';
import {Card, Container} from '../../components';
import {Items} from './components';
import data from './data';

const DetailsScreen = () => {
  return (
    <Container>
      <Card>
        <Text className="text-2xl">Dependencies</Text>
        <Text className="text-justify text-base">
          The most important dependencies with which this project was built with
          are:
        </Text>
        <FlatList data={data} renderItem={({item}) => <Items item={item} />} />
      </Card>
    </Container>
  );
};

export default DetailsScreen;
