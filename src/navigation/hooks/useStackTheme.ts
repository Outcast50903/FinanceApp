import {StackNavigationOptions} from '@react-navigation/stack';

const useDrawerTheme = (isDarkMode: boolean): StackNavigationOptions => {
  const themeColor = isDarkMode ? 'rgb(23 23 23)' : 'rgb(245 245 245)';
  const textColor = isDarkMode ? 'rgb(245 245 245)' : 'rgb(23 23 23)';

  return {
    headerStyle: {
      backgroundColor: themeColor,
    },
    headerTintColor: textColor,
    headerTitle: () => null,
  };
};

export default useDrawerTheme;
