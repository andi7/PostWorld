import { createStackNavigator } from 'react-navigation';

import SignUp from './SignUp/SignUp';
import EnterUsername from './EnterUsername/EnterUsername';

export default createStackNavigator(
  {
    SignUp,
    EnterUsername
  },
  {
    headerMode: 'none'
  }
);
