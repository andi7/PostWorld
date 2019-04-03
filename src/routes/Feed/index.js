import { createStackNavigator } from 'react-navigation';

import FeedPosts from './FeedPosts/FeedPosts';

export default createStackNavigator({
  FeedPosts: {
    screen: FeedPosts,
    navigationOptions: { headerTitle: 'postworld' }
  }
});
