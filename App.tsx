/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppNavigation from './src/navigation';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import {useOnlineManager} from './src/hooks';
import useAppState from './src/hooks/useStateApp';
import {AppStateStatus, Platform} from 'react-native';

const client = new QueryClient();

const App = (): JSX.Element => {
  useOnlineManager();

  const onAppStateChange = (status: AppStateStatus) =>
    Platform.OS !== 'web' && focusManager.setFocused(status === 'active');

  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={client}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default App;
