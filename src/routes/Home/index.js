import { createStackNavigator } from 'react-navigation';

import PostList from './PostList/PostList';

export default createStackNavigator(
  {
    PostList
  },
  {
    headerMode: 'none'
  }
);
