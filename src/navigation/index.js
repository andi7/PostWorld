import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Onboarding from '../routes/Onboarding/Onboarding';

import SignUp from '../routes/SignUp/SignUp';
import EnterUsername from '../routes/EnterUsername/EnterUsername';

import Feed from '../routes/Feed/Feed';

const MainNavigator = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: { title: 'postworld' }
  }
});

const AuthNavigator = createStackNavigator(
  {
    SignUp,
    EnterUsername
  },
  {
    headerMode: 'none'
  }
);

const AppNavigation = createSwitchNavigator(
  {
    Onboarding,
    AuthNavigator,
    MainNavigator
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigation);
