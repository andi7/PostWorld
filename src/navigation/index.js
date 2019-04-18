import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import { colors } from 'theme';

import Onboarding from 'routes/Onboarding/Onboarding';
import AuthNavigator from 'routes/Auth';

import PostComments from 'routes/Comments/PostComments';
import MapView from 'routes/Map/MapView';

import TabNavigator from './TabNavigator';

import CustomDrawer from './CustomDrawer/CustomDrawer';

const DrawerNavigator = createDrawerNavigator(
  {
    TabNavigator
  },
  {
    drawerPosition: 'right',
    contentComponent: CustomDrawer
  }
);

const MainNavigator = createStackNavigator(
  {
    DrawerNavigator,
    PostComments,
    MapView
  },
  {
    initialRouteName: 'DrawerNavigator',
    defaultNavigationOptions: {
      header: null,
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
    initialRouteName: 'Onboarding',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#fff'
    }
  }
);

export default createAppContainer(AppNavigation);
