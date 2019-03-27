import React, { Component } from 'react';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import * as NavigationUtils from 'utils/navigation';

import createStore from './redux';
import AppNavigator from './navigation';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const store = createStore();

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
