import React, {FC} from 'react';
import {ScrollView, StatusBar, View, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type CustomContainerProps = {
  children: React.JSX.Element;
};

const CustomContainer: FC<CustomContainerProps> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900 flex-1';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="bg-neutral-300 dark:bg-slate-900 flex-1 items-center justify-center">
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomContainer;
