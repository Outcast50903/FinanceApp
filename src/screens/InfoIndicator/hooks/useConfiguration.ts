import {useColorScheme} from 'react-native';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';

export const useChartConfiguration = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 1,
    color: () => (isDarkMode ? 'rgba(242, 243, 244, 1)' : 'rgba(0, 0, 0, 1)'),
    strokeWidth: 2,
    useShadowColorFromDataset: false,
    propsForBackgroundLines: {
      strokeDasharray: '',
    },
  } as AbstractChartConfig;
};
