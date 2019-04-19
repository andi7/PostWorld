import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { images } from 'theme';
import api from 'config/api';
import MapActions from 'models/map';
import PostsActions from 'models/posts';

import FeedNavigator from 'routes/Feed';
import EventsNavigator from 'routes/Events';

import CustomTabBarComponent from './CustomTabBar/CustomTabBarComponent';

const ConnectedTabButton = buttonMapType =>
  connect(({ map }) => ({
    map
  }))(({ style, children, onPress, map, dispatch }) => (
    <TouchableOpacity
      style={style}
      onPress={() => {
        if (map.isActive) {
          if (map.mapType !== buttonMapType) {
            dispatch(MapActions.setMapType(buttonMapType));

            if (buttonMapType === 'posts') {
              dispatch(PostsActions.fetchMapPosts());
            }
          }
        } else {
          onPress();
        }
      }}
    >
      {children}
    </TouchableOpacity>
  ));

const ConnectedTabIcon = connect(({ map }) => ({
  map
}))(({ focused, icon, type, map }) => {
  const isActive = (map.isActive && map.mapType === type) || (!map.isActive && focused);
  return (
    <Image
      source={icon}
      style={{
        opacity: isActive ? 1 : 0.8,
        transform: [{ scale: isActive ? 1 : 0.8 }],
        height: 21,
        width: 27,
        resizeMode: 'contain'
      }}
    />
  );
});

const UserIcon = connect(({ auth }) => ({ user: auth.user }))(({ user }) => (
  <Image
    source={{ uri: api.imageUrl.concat(user.profile_image.path) }}
    style={{ height: 37, width: 37, borderRadius: 15 }}
  />
));

export default createBottomTabNavigator(
  {
    FeedNavigator: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarButtonComponent: ConnectedTabButton('posts'),
        tabBarIcon: ({ focused }) => (
          <ConnectedTabIcon focused={focused} icon={images.home} type="posts" />
        )
      }
    },
    SearchNavigator: {
      screen: EventsNavigator,
      navigationOptions: {
        tabBarButtonComponent: ConnectedTabButton('events'),
        tabBarIcon: ({ focused }) => (
          <ConnectedTabIcon focused={focused} icon={images.search} type="events" />
        )
      }
    },
    ModalCustomButton: {
      screen: () => <View />,
      navigationOptions: {
        tabBarIcon: () => (
          <Image source={images.compose} style={{ height: 46, width: 43, resizeMode: 'contain' }} />
        ),
        tabBarOnPress: () => {}
      }
    },
    Empty: {
      screen: () => <View />,
      navigationOptions: {
        tabBarOnPress: () => {}
      }
    },
    DrawerCustomButton: {
      screen: () => <View />,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: <UserIcon />,
        tabBarOnPress: () => navigation.openDrawer()
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    },
    tabBarComponent: props => <CustomTabBarComponent {...props} />
  }
);
