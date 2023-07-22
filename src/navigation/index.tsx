import React from 'react';
import HomeScreen from '../screens/Home';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import drawerTheme from './hooks/drawerTheme';
import DetailsScreen from '../screens/Details';

const {Navigator, Screen} = createDrawerNavigator();

const AppNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={drawerTheme(isDarkMode)}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
