import React from 'react';
import HomeScreen from '../screens/Home';
import {View, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import drawerTheme from './hooks/drawerTheme';

const {Navigator, Screen} = createDrawerNavigator();
// const {Navigator, Screen} = createNativeStackNavigator();
const AppNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="flex-1">
      <NavigationContainer>
        <Navigator
          initialRouteName="Home"
          screenOptions={drawerTheme(isDarkMode)}>
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Detail" component={HomeScreen} />
        </Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigation;
