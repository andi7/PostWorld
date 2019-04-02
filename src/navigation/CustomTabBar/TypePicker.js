import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { images, gradients } from 'theme';

import styles from './styles';

const TypePicker = ({ onSelect, onClose }) => (
  <LinearGradient style={styles.gradient} {...gradients.lightBlue}>
    <Text style={styles.title}>Choose Post Type</Text>

    <View style={styles.tagsList}>
      <TouchableOpacity style={styles.tagContainer} onPress={() => onSelect('food')}>
        <LinearGradient style={styles.tag} {...gradients.red}>
          <Image source={images.tagFood} style={styles.tagIcon} />
        </LinearGradient>

        <Text style={styles.tagText}>Food & Drink</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tagContainer} onPress={() => onSelect('general')}>
        <LinearGradient style={styles.tag} {...gradients.blue}>
          <Image source={images.tagGeneral} style={styles.tagIcon} />
        </LinearGradient>

        <Text style={styles.tagText}>General</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tagContainer} onPress={() => onSelect('art')}>
        <LinearGradient style={styles.tag} {...gradients.purple}>
          <Image source={images.tagArt} style={styles.tagIcon} />
        </LinearGradient>

        <Text style={styles.tagText}>Art</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={onClose}>
      <Image source={images.close} style={styles.closeIcon} />
    </TouchableOpacity>
  </LinearGradient>
);

export default TypePicker;
