import './gesture-handler.native';
import React, {useEffect} from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {config} from '@gluestack-ui/config';
import store from './src/redux/stores/store';
import {Provider} from 'react-redux';
import Routes from './src/Routes';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {OneSignal} from 'react-native-onesignal';
import {navigationRef} from './src/navigation/RootNavigation';

const App: React.FC = () => {
  useEffect(() => {
    OneSignal.initialize('b3d66694-863a-4e5e-a07a-b08a98de9c6f');
    // requestNotifeePermission();
    OneSignal.Notifications.requestPermission(false);
    // OneSignal.promptForPushNitificationWithUserResponse();

    OneSignal.Notifications.addEventListener(
      'foregroundWillDisplay',
      async event => {
        event.preventDefault();

        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
          importance: AndroidImportance.HIGH,
        });

        const meal = event.notification.additionalData?.meal;

        await notifee.displayNotification({
          title: event.notification.title,
          body: 'hello notifee',
          android: {
            channelId,
            smallIcon: 'ic_launcher',
            importance: AndroidImportance.HIGH,
          },
          data: {
            meal: JSON.stringify(meal),
          },
        });
      },
    );
  }, []);

  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(({type, detail}) => {
      if (type === EventType.PRESS) {
        const mealJson = detail.notification?.data?.meal;
        if (mealJson) {
          const meal = JSON.parse(mealJson);
          navigationRef.current?.navigate('RecipeDetails', {meal});
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
};

export default App;
