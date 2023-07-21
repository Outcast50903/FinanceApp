import {DrawerNavigationOptions} from '@react-navigation/drawer';

const drawerTheme = (isDarkMode: boolean): DrawerNavigationOptions => {
  const themeColor = isDarkMode ? 'rgb(39 55 70)' : 'rgb(245 245 245)';
  const textColor = isDarkMode ? 'rgb(245 245 245)' : 'rgb(39 55 70)';

  return {
    headerStyle: {
      backgroundColor: themeColor,
    },
    headerTintColor: textColor,
    drawerStyle: {
      backgroundColor: themeColor,
    },
    drawerInactiveTintColor: textColor,
    drawerAllowFontScaling: false,
    headerTitle: () => null,
    drawerStatusBarAnimation: 'fade',
  };
};

export default drawerTheme;
