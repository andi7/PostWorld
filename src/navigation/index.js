import SplashScreen from 'react-native-splash-screen';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Onboarding from '../routes/Onboarding/Onboarding';
import AuthNavigator from '../routes/Auth';

import PostComments from '../routes/Home/PostComments/PostComments';
import TabNavigator from './TabNavigator';

SplashScreen.hide();

const MainNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: { header: null }
    },
    PostComments: {
      screen: PostComments,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null
    }
  }
);

const AppNavigation = createSwitchNavigator(
  {
    Onboarding,
    AuthNavigator,
    MainNavigator
  },
  {
    initialRouteName: 'MainNavigator',
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigation);
