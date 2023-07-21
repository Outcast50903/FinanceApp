import {DrawerNavigationOptions} from '@react-navigation/drawer';

const drawerTheme = (isDarkMode: boolean): DrawerNavigationOptions => {
  const themeColor = isDarkMode ? 'rgb(15 23 42)' : 'rgb(212 212 212)';
  const textColor = isDarkMode ? 'rgb(212 212 212)' : 'rgb(15 23 42)';

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
