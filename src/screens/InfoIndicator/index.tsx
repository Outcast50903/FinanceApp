import {View, Text, Dimensions, useColorScheme} from 'react-native';
import React from 'react';
import {useQueryHistory} from '../../api';
import {LineChart} from 'react-native-chart-kit';
import {LineChartData} from 'react-native-chart-kit/dist/line-chart/LineChart';
import {Container} from '../../components';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import dayjs from 'dayjs';
import {useGetKey} from '../../hooks';
import {useAtomValue} from 'jotai';
import {titleSelectedAtom} from '../../atoms';

const InfoIndicator = () => {
  const {height, width} = Dimensions.get('window');
  const isDarkMode = useColorScheme() === 'dark';
  const title = useAtomValue(titleSelectedAtom);
  const Key = useGetKey();
  const {
    historyQuery: {data: history, isLoading, isFetching},
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

  const lineChartData: LineChartData = {
    labels:
      (history && history[Key].map(({Fecha}) => dayjs(Fecha).format('DD')))
        ?.slice(0, 10)
        .reverse() || [],
    datasets: [
      {
        data:
          (history && history[Key].map(({Valor}) => parseInt(Valor, 10)))
            ?.slice(0, 10)
            .reverse() || [],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
        withDots: true,
      },
    ],
  };

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 1,
    color: () => (isDarkMode ? 'rgba(242, 243, 244, 1)' : 'rgba(0, 0, 0, 1)'),
    strokeWidth: 2,
    useShadowColorFromDataset: false,
    propsForBackgroundLines: {
      strokeDasharray: '',
    },
  };

  const currentVale = history && history[Key][0];

  return (
    <Container>
      <View className="flex-1 items-center justify-evenly">
        <View>
          <Text className="text-2xl font-bold text-center mb-4 dark:text-white">{`El ${title} hoy`}</Text>
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
