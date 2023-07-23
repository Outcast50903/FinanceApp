import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DetailsScreen from '../screens/Details';
import IndicatorStack from './IndicatorStack';
import {useDrawerTheme} from './hooks';

const {Navigator, Screen} = createDrawerNavigator();

const AppNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={useDrawerTheme(isDarkMode)}>
        <Screen name="Home" component={IndicatorStack} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
