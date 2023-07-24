/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StyleSheet} from 'react-native';
import useAppSetup from '~/hooks/useAppSetup';
import AppNavigator from '~/navigation/AppNavigator';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const {appIsReady} = useAppSetup();

  if (!appIsReady) return <></>;

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator></AppNavigator>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
