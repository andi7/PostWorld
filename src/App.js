import React, { Component } from 'react';
import { UIManager } from 'react-native';

import AppNavigator from './navigation';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
