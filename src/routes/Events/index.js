import { createStackNavigator } from 'react-navigation';

import EventList from './EventList/EventList';

export default createStackNavigator(
  {
    EventList
  },
  {
    headerMode: 'none'
  }
);
