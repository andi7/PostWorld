import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Onboarding from '../routes/Onboarding/Onboarding';
import AuthNavigator from '../routes/Auth';

import PostComments from '../routes/Home/PostComments/PostComments';
import TabNavigator from './TabNavigator';

const MainNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
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
