import {IndicatorListResponse} from 'api';
import dayjs from 'dayjs';
import {LineChartData} from 'react-native-chart-kit/dist/line-chart/LineChart';

const useLineChartData = (
  history: IndicatorListResponse | undefined,
  Key: string,
) => {
  return {
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
  } as LineChartData;
};

export default useLineChartData;
