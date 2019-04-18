import React, { Component } from 'react';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import * as NavigationUtils from 'utils/navigation';
import mapboxConfig from 'config/mapbox';

import createStore from './redux';
import AppNavigator from './navigation';

// Set MapBox Token
MapboxGL.setAccessToken(mapboxConfig.mapAccessToken);

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

// Create Redux Store
const store = createStore();

// Hide App Splash Screen
SplashScreen.hide();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator ref={navRef => NavigationUtils.setNavigator(navRef)} />
      </Provider>
    );
  }
}

export default App;
