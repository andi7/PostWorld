import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors, images } from 'theme';

import styles from './styles';

const TypePicker = ({ onSelect, onClose }) => (
  <LinearGradient
    style={styles.gradient}
    colors={colors.blueGradient}
    start={{ x: 0.5, y: 0.5 }}
    end={{ x: 1, y: 1 }}
  >
    <Text style={styles.title}>Choose Post Type</Text>

    <View style={styles.tagsContainer}>
      <TouchableOpacity style={styles.tag} onPress={() => onSelect('food')}>
        <Image source={images.tagFood} style={styles.tagIcon} />

        <Text style={styles.tagText}>Food & Drink</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tag} onPress={() => onSelect('general')}>
        <Image source={images.tagGeneral} style={styles.tagIcon} />

        <Text style={styles.tagText}>General</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tag} onPress={() => onSelect('art')}>
        <Image source={images.tagArt} style={styles.tagIcon} />

        <Text style={styles.tagText}>Art</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={onClose}>
      <Image source={images.close} style={styles.closeIcon} />
    </TouchableOpacity>
  </LinearGradient>
);

export default TypePicker;
