import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryScreen from '../screens/History';
import InfoIndicator from '../screens/InfoIndicator';
import {IndicatorStackType} from './types';
import HomeScreen from '../screens/Home';
import {useAtomValue} from 'jotai';
import {titleSelectedAtom} from '../atoms';
import {useColorScheme} from 'react-native';
import {useStackTheme} from './hooks';

const {Navigator, Screen} = createStackNavigator<IndicatorStackType>();
const IndicatorStack = () => {
  const titleSelected: string | null = useAtomValue(titleSelectedAtom);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Navigator
      initialRouteName="Volver"
      screenOptions={useStackTheme(isDarkMode)}>
      <Screen
        name="Volver"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Screen
        name="History"
        component={HistoryScreen}
        options={{title: titleSelected || 'Historial'}}
      />
      <Screen
        name="InfoIndicator"
        component={InfoIndicator}
        options={{title: titleSelected || 'Información del indicador'}}
      />
    </Navigator>
  );
};

export default IndicatorStack;
