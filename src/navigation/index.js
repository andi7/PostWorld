import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import { colors } from 'theme';

import Onboarding from '../routes/Onboarding/Onboarding';
import AuthNavigator from '../routes/Auth';

import PostComments from '../routes/Comments/PostComments';
import TabNavigator from './TabNavigator';

const DrawerNavigator = createDrawerNavigator(
  {
    TabNavigator
  },
  {
    drawerPosition: 'right'
  }
);

const MainNavigator = createStackNavigator(
  {
    DrawerNavigator: {
      screen: DrawerNavigator,
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
      headerBackTitle: null,
      headerTintColor: colors.primary
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
    initialRouteName: 'AuthNavigator',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#fff'
    }
  }
);

export default createAppContainer(AppNavigation);
