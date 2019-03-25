import React from 'react';
import { FlatList } from 'react-native';

import postsFixture from '../../../fixtures/posts';

import EventCard from '../modules/EventCard/EventCard';
import OfferCard from '../modules/OfferCard/OfferCard';
import PostList from '../../Home/PostList/PostList';
import events from '../../../fixtures/events';

class EventList extends React.Component {
  renderList = () => {
    const type = this.props.navigation.getParam('type', 'group');

    switch (type) {
      case 'group':
        return (
          <FlatList
            keyExtractor={el => `group${el.id}`}
            data={events}
            renderItem={({ item }) => <EventCard event={item} />}
          />
        );
      case 'food':
        return <PostList posts={postsFixture(true)} navigation={this.props.navigation} />;
      case 'art':
        return <PostList posts={postsFixture(true)} navigation={this.props.navigation} />;
      case 'offer':
        return (
          <FlatList
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
