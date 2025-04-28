import './gesture-handler.native';
import React, {useEffect} from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {config} from '@gluestack-ui/config';
import store from './src/redux/stores/store';
import {Provider} from 'react-redux';
import Routes from './src/Routes';
import notifee, {AuthorizationStatus} from '@notifee/react-native';
import {OneSignal} from 'react-native-onesignal';

// import RecipeDetials from './src/screens/RecipeDetails';
OneSignal.initialize('b3d66694-863a-4e5e-a07a-b08a98de9c6f');

const requestNotifeePermission = async () => {
  const settings = await notifee.getNotificationSettings();
  if (
    settings.authorizationStatus === AuthorizationStatus.DENIED ||
    settings.authorizationStatus !== AuthorizationStatus.AUTHORIZED
  ) {
    await notifee.requestPermission();
  }
};

const App: React.FC = () => {
  useEffect(() => {
    requestNotifeePermission();
  }, []);

  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
};

export default App;
