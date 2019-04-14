import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { DynamicHeightImage, IconButton } from 'components';
import { images } from 'theme';
import { EventDetails } from 'domains/events/EventCard/EventCard';

import styles from './styles';

class EventInfo extends React.Component {
  render() {
    const { event } = this.props;
    console.log(event);

    return (
      <ScrollView style={styles.container}>
        <DynamicHeightImage style={styles.eventImage} source={{ uri: event.image }} />

        <View style={styles.generalInfoContainer}>
          <View style={styles}>
            <Text style={styles.monthText}>March</Text>

            <Text style={styles.dayText}>31</Text>
          </View>

          <View>
            <EventDetails event={event} />
          </View>

          <IconButton
            icon={event.liked ? images.likeActive : images.like}
            iconStyle={styles.likeIcon}
          >
            <Text style={styles.likeText}>{event.likes}</Text>
          </IconButton>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Details</Text>

          <Text style={styles.detailsText}>{event.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default EventInfo;
