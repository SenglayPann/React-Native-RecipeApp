import './gesture-handler.native';
import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {config} from '@gluestack-ui/config';
import store from './src/stores/store';
import {Provider} from 'react-redux';
import Routes from './src/routes';

// import RecipeDetials from './src/screens/RecipeDetails';

const App: React.FC = () => {
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
