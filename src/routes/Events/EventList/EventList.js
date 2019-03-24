import React from 'react';
import { FlatList } from 'react-native';

import EventCard from '../modules/EventCard/EventCard';
import events from '../../../fixtures/events';

class EventList extends React.Component {
  render() {
    return (
      <FlatList
        keyExtractor={el => `${el.id}`}
        data={events}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    );
  }
}

export default EventList;
