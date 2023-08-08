import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from 'navigation/types';
import {stackTheme} from 'navigation/themes';
import HomeScreen from 'screens/Home';
import HistoryScreen from 'screens/History';
import InfoIndicator from 'screens/InfoIndicator';

const {Navigator, Screen} = createStackNavigator<HomeStackParamList>();

const IndicatorStack = () => {
  return (
    <Navigator initialRouteName="HOME" screenOptions={stackTheme}>
      <Screen name="HOME" component={HomeScreen} />
      <Screen name="HISTORY" component={HistoryScreen} />
      <Screen name="INFO" component={InfoIndicator} />
    </Navigator>
  );
};

export default IndicatorStack;
