import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../../../theme';

const styles = StyleSheet.create({
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    marginHorizontal: 12,
    backgroundColor: 'black',
    opacity: 0.2
  },

  activeDotContainer: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: `${colors.primary}4D`,
    alignItems: 'center',
    justifyContent: 'center'
  },

  activeDot: {
    opacity: 1,
    backgroundColor: colors.primary
  }
});

const Dot = <View style={styles.dot} />;

const ActiveDot = (
  <View style={styles.activeDotContainer}>
    <View style={[styles.dot, styles.activeDot]} />
  </View>
);

export { Dot, ActiveDot };
