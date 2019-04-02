import React from 'react';
import { FlatList } from 'react-native';

import postsFixture from 'fixtures/posts';
import events from 'fixtures/events';

import EventCard from 'domains/events/EventCard/EventCard';
import OfferCard from 'domains/events/OfferCard/OfferCard';

import PostList from 'routes/Feed/PostList/PostList';

class EventList extends React.Component {
  renderList = () => {
    const type = this.props.navigation.getParam('type', 'group');

    switch (type) {
      case 'group':
        return (
          <FlatList
            key="groupList"
            keyExtractor={el => `group${el.id}`}
            data={events}
            renderItem={({ item }) => <EventCard event={item} />}
          />
        );
      case 'food':
        return <PostList key="food" navigation={this.props.navigation} />;
      case 'art':
        return <PostList key="art" navigation={this.props.navigation} />;
      case 'offer':
        return (
          <FlatList
            key="offerList"
            keyExtractor={el => `offer${el.id}`}
            data={events}
            renderItem={({ item }) => <OfferCard event={item} />}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return <React.Fragment>{this.renderList()}</React.Fragment>;
  }
}

export default EventList;
