import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {useAtomValue} from 'jotai';
import {titleSelectedAtom} from 'atoms';
import {useGetKey} from 'hooks';
import {Container, Loading} from 'components';
import {useChartConfiguration, useLineChartData} from './hooks';
import {useQueryHistory} from 'api';

const InfoIndicator = () => {
  const {height, width} = Dimensions.get('window');
  const title = useAtomValue(titleSelectedAtom);
  const chartConfig = useChartConfiguration();
  const Key = useGetKey();
  const {
    historyQuery: {data: history, isLoading, isFetching},
  } = useQueryHistory();

  const lineChartData = useLineChartData(history, Key);

  if (isLoading || isFetching) {
    return <Loading />;
  }

  const currentVale = history && history[Key][0];

  return (
    <Container>
      <View className="flex-1 items-center justify-evenly">
        <View>
          <Text className="text-2xl font-bold text-center mb-4 dark:text-white">{`${title} hoy`}</Text>
          <View className="flex-row justify-between items-end">
            <Text className="text-6xl dark:text-white">
              {currentVale?.Valor || ''}
            </Text>
            <Text className="text-xl dark:text-white">CLP</Text>
          </View>
          <Text className="text-xl dark:text-white">
            {currentVale?.Fecha || ''}
          </Text>
        </View>
        <LineChart
          data={lineChartData}
          width={width / 1.1}
          height={height / 2}
          chartConfig={chartConfig}
          bezier
          segments={6}
          withVerticalLines={false}
        />
      </View>
    </Container>
  );
};

export default InfoIndicator;
