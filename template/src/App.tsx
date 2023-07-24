/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import useAppSetup from '~/hooks/useAppSetup';
import AppNavigator from '~/navigation/AppNavigator';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const {appIsReady} = useAppSetup();

  if (!appIsReady) {
    return <></>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
}

export default App;
