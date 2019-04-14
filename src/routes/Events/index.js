import React from 'react';
import { createStackNavigator } from 'react-navigation';

import EventList from './EventList/EventList';
import EventHeader from './EventHeader/EventHeader';
import EventDetails from './EventDetails/EventDetails';

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
  }
});
