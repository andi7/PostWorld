import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Onboarding from '../routes/Onboarding/Onboarding';
import AuthNavigator from '../routes/Auth';
import HomeNavigator from '../routes/Home';

const MainNavigator = createBottomTabNavigator({
  HomeNavigator: {
    screen: HomeNavigator,
    navigationOptions: { tabBarLabel: 'Home' }
  }
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
