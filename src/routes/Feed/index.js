import { createStackNavigator } from 'react-navigation';

import { fonts } from 'theme';

import FeedPosts from './FeedPosts/FeedPosts';

export default createStackNavigator({
  FeedPosts: {
    screen: FeedPosts,
    navigationOptions: {
      headerTitle: 'postworld',
      headerTitleStyle: {
        fontSize: 17,
        fontFamily: fonts.Amazonas
      }
    }
  }
});
