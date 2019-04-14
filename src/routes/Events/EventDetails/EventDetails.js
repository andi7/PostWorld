import React from 'react';

import EventInfo from 'domains/events/EventInfo/EventInfo';

class EventDetails extends React.Component {
  render() {
    const event = this.props.navigation.getParam('event');

    return <EventInfo event={event} />;
  }
}

export default EventDetails;
