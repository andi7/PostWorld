import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { images, gradients } from 'theme';
import { GradientButton } from 'components';

import styles from './styles';

const EventHeader = ({ navigation }) => {
  const currentType = navigation.getParam('type', 'group');

  return (
    <View style={styles.header}>
      <GradientButton
        style={styles.tagContainer}
        onPress={() => navigation.setParams({ type: 'group' })}
        {...gradients.yellow}
      >
        <Image
          source={images.tagGroup}
          style={[styles.tag, currentType === 'group' && styles.tagActive]}
        />
      </GradientButton>

      <GradientButton
        style={styles.tagContainer}
        onPress={() => navigation.setParams({ type: 'food' })}
        {...gradients.red}
      >
        <Image
          source={images.tagFood}
          style={[styles.tag, currentType === 'food' && styles.tagActive]}
        />
      </GradientButton>

      <GradientButton
        style={styles.tagContainer}
        onPress={() => navigation.setParams({ type: 'art' })}
        {...gradients.purple}
      >
        <Image
          source={images.tagArt}
          style={[styles.tag, currentType === 'art' && styles.tagActive]}
        />
      </GradientButton>

      <GradientButton
        style={styles.tagContainer}
        onPress={() => navigation.setParams({ type: 'offer' })}
        {...gradients.green}
      >
        <Image
          source={images.tagOffer}
          style={[styles.tag, currentType === 'offer' && styles.tagActive]}
        />
      </GradientButton>

      <TouchableOpacity>
        <Image source={images.logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

export default EventHeader;
