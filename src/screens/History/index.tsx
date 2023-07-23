import React from 'react';
import {Container, List} from '../../components';
import {HistoryItem} from './components';
import {useQueryHistory} from '../../api';
import {Text, View} from 'react-native';
import {useGetKey} from '../../hooks';
import {useAtomValue} from 'jotai';
import {titleSelectedAtom} from '../../atoms';

const HistoryScreen = () => {
  const Key: string = useGetKey();
  const title = useAtomValue(titleSelectedAtom);

  const {
    historyQuery: {data, isLoading, isFetching},
  } = useQueryHistory();

  if (isLoading || isFetching) {
    return (
      <Container>
        <View className="flex-1 items-center justify-evenly">
          <Text>Cargando la información</Text>
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <Text className="text-2xl font-bold text-center mb-4 pt-6 dark:text-white">
        {title || 'Historial'}
      </Text>
      <List
        data={(data && data[Key]) || []}
        renderItem={({item: {Fecha, Valor}}) => (
          <HistoryItem date={Fecha} value={Valor} />
        )}
      />
    </Container>
  );
};

export default HistoryScreen;
