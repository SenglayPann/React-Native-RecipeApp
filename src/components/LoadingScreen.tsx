import React from 'react';
import {ActivityIndicator} from 'react-native';

const LoadingScreen = (Props: any) => {
  return <ActivityIndicator size="large" {...Props} />;
};

export default LoadingScreen;
