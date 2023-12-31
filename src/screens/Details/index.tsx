import React from 'react';
import {Card, Container} from 'components';
import {FlatList, Text} from 'react-native';
import {Items} from './components';
import data from './data';

const DetailsScreen = () => {
  return (
    <Container>
      <Card>
        <Text className="text-2xl dark:text-black">Dependencias</Text>
        <Text className="text-justify text-base dark:text-black">
          Las dependencias más importantes con las que se construyó este
          proyecto con son:
        </Text>
        <FlatList testID='details-list-id' data={data} renderItem={({item}) => <Items item={item} />} />
      </Card>
    </Container>
  );
};

export default DetailsScreen;
