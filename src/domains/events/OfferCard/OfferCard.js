import React from 'react';
import { View, Image, Text } from 'react-native';
import moment from 'moment';

import { IconButton } from 'components';
import { images } from 'theme';

import styles from './styles';

const EventCard = ({ event }) => (
  <View style={styles.card}>
    <View style={{ flex: 1 }}>
      <Text style={styles.title} numberOfLines={1}>
        {event.name}!
      </Text>

      <Text style={styles.offerText}>{event.name}</Text>

      <View style={styles.row}>
        <Image source={images.locationArrow} style={styles.locationIcon} />

        <Text style={styles.detailsText}>{event.location}</Text>
      </View>

      <View style={styles.row}>
        <Image source={images.clock} style={styles.clockIcon} />

        <Text style={styles.detailsText}>
          {moment(event.time).toNow(true)} - {moment(event.time).format('h:mm A zz')}
        </Text>
      </View>
    </View>

    <View>
      <Image source={{ uri: event.image }} style={styles.eventImage} />

      <IconButton
        style={{ marginTop: 5 }}
        icon={event.liked ? images.likeActive : images.like}
        iconStyle={styles.likeIcon}
      >
        <Text style={[styles.likeText, event.liked && styles.likeTextActive]}>{event.likes}</Text>
      </IconButton>
    </View>
  </View>
);

export default EventCard;
