import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Onboarding from '../routes/Onboarding/Onboarding';
import SignUp from '../routes/SignUp/SignUp';
import EnterUsername from '../routes/EnterUsername/EnterUsername';

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
    AuthNavigator
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigation);
