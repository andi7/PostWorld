import React from 'react';
import { createStackNavigator } from 'react-navigation';

import EventHeader from 'domains/events/EventHeader/EventHeader';

import EventList from './EventList/EventList';
import EventDetails from './EventDetails/EventDetails';

import MapView from '../Map/MapView';

export default createStackNavigator({
  EventList: {
    screen: EventList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (...p) => <EventHeader {...p} navigation={navigation} />,
      headerStyle: { height: 55 },
      headerBackTitle: null
    })
  },

  EventDetails: {
    screen: EventDetails,
    navigationOptions: {
      headerStyle: { height: 55 }
    }
  },

  EventMap: {
    screen: MapView,
    navigationOptions: {
      header: null
    }
  }
});
