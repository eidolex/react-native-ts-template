/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from '~/navigation/AppNavigator';
import useAppSetup from './hooks/useAppSetup';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const {appIsReady} = useAppSetup();

  return <></>;

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator></AppNavigator>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
