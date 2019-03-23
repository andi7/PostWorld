import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Onboarding from '../routes/Onboarding/Onboarding';
import AuthNavigator from '../routes/Auth';
import HomeNavigator from '../routes/Home';

import PostComments from '../routes/Home/PostComments/PostComments';

const TabsNavigator = createBottomTabNavigator({
  HomeNavigator: {
    screen: HomeNavigator,
    navigationOptions: { tabBarLabel: 'Home' }
  }
});

const MainNavigator = createStackNavigator({
  TabsNavigator: {
    screen: TabsNavigator,
    navigationOptions: { title: 'postworld' }
  },
  PostComments: {
    screen: PostComments,
    navigationOptions: {
      tabBarVisible: false
    }
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
