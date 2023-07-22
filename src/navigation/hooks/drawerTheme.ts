import {DrawerNavigationOptions} from '@react-navigation/drawer';

const drawerTheme = (isDarkMode: boolean): DrawerNavigationOptions => {
  const themeColor = isDarkMode ? 'rgb(23 23 23)' : 'rgb(245 245 245)';
  const textColor = isDarkMode ? 'rgb(245 245 245)' : 'rgb(23 23 23)';

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
