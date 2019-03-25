import React from 'react';
import { createStackNavigator } from 'react-navigation';

import EventList from './EventList/EventList';
import EventHeader from './EventHeader/EventHeader';

export default createStackNavigator({
  EventList: {
    screen: EventList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (...p) => <EventHeader {...p} navigation={navigation} />,
      headerStyle: { height: 55 }
    })
  }
});
