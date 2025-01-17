import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { fonts, images } from 'theme';

import MapActions from 'models/map';
import PostsActions from 'models/posts';

import FeedPosts from './FeedPosts/FeedPosts';

import MapView from '../Map/MapView';

const LogoButton = connect()(({ navigation, dispatch }) => (
  <TouchableOpacity
    onPress={() => {
      dispatch(MapActions.openMap('posts'));
      dispatch(PostsActions.fetchMapPosts());
      navigation.navigate('FeedMap');
    }}
  >
    <Image
      source={images.logo}
      style={{ height: 30, width: 30, resizeMode: 'contain', marginRight: 15 }}
    />
  </TouchableOpacity>
));

export default createStackNavigator({
  FeedPosts: {
    screen: FeedPosts,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'postworld',
      headerTitleStyle: {
        color: '#313131',
        fontSize: 20,
        fontFamily: fonts.Amazonas
      },
      headerRight: <LogoButton navigation={navigation} />
    })
  },

  FeedMap: {
    screen: MapView,
    navigationOptions: {
      header: null
    }
  }
});
