import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { fonts } from '../../../theme';

const SwiperPage = ({ image, header, description }) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} />

    <Text style={styles.header}>
      {header} {'\n\n'} <Text style={styles.description}>{description}</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    resizeMode: 'contain'
  },

  header: {
    marginTop: 5,
    fontSize: 23,
    color: '#212121',
    textAlign: 'center',
    fontFamily: fonts.MontserratRegular
  },

  description: {
    fontSize: 18
  }
});

export default SwiperPage;
