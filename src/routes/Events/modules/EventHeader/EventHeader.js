import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { images } from 'theme';

import styles from './styles';

const EventHeader = ({ navigation }) => (
  <View style={styles.header}>
    <TouchableOpacity
      style={styles.tagContainer}
      onPress={() => navigation.setParams({ type: 'group' })}
    >
      <Image source={images.tagGroup} style={styles.tag} />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.tagContainer}
      onPress={() => navigation.setParams({ type: 'food' })}
    >
      <Image source={images.tagFood} style={styles.tag} />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.tagContainer}
      onPress={() => navigation.setParams({ type: 'art' })}
    >
      <Image source={images.tagArt} style={styles.tag} />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.tagContainer}
      onPress={() => navigation.setParams({ type: 'offer' })}
    >
      <Image source={images.tagOffer} style={styles.tag} />
    </TouchableOpacity>

    <TouchableOpacity>
      <Image source={images.logo} style={styles.logo} />
    </TouchableOpacity>
  </View>
);

export default EventHeader;
