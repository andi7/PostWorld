import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import faker from 'faker';

import { images } from 'theme';

import FeedNavigator from 'routes/Feed';
import EventsNavigator from 'routes/Events';

import CustomTabBarComponent from './CustomTabBar/CustomTabBarComponent';

export default createBottomTabNavigator(
  {
    Feedavigator: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={images.home}
            style={{
              opacity: focused ? 1 : 0.6,
              height: 21,
              width: 27,
              resizeMode: 'contain'
            }}
          />
        )
      }
    },
    SearchNavigator: {
      screen: EventsNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={images.search}
            style={{
              opacity: focused ? 1 : 0.6,
              height: 20,
              width: 24,
              resizeMode: 'contain'
            }}
          />
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
        tabBarIcon: () => (
          <Image
            source={{ uri: faker.image.avatar() }}
            style={{ height: 37, width: 37, borderRadius: 15, resizeMode: 'contain' }}
          />
        ),
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
