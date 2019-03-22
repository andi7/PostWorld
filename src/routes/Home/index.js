import { createStackNavigator } from 'react-navigation';

import PostList from './PostList/PostList';
import PostComments from './PostComments/PostComments';

export default createStackNavigator({
  PostList: {
    screen: PostList,
    navigationOptions: { title: 'postworld' }
  },
  PostComments: {
    screen: PostComments
  }
});
