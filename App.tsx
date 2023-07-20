/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import {AppStateStatus, Platform} from 'react-native';

import AppNavigation from './src/navigation';
import {useOnlineManager} from './src/hooks';
import useAppState from './src/hooks/useStateApp';

const client = new QueryClient();

const App = (): JSX.Element => {
  const onAppStateChange = (status: AppStateStatus) =>
    Platform.OS !== 'web' && focusManager.setFocused(status === 'active');

  useOnlineManager();
  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={client}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default App;
