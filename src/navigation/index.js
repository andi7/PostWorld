import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Onboarding from '../routes/Onboarding/Onboarding';
import AuthNavigator from '../routes/Auth';
import FeedNavigator from '../routes/Feed';

const MainNavigator = createBottomTabNavigator({
  FeedNavigator
});

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
