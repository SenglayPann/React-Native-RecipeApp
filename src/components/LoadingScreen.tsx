import {Center, SafeAreaView} from '@gluestack-ui/themed';
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const LoadingScreen = () => {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" />
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default LoadingScreen;
