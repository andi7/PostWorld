import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import MapActions from 'models/map';

import { images, gradients } from 'theme';
import { GradientButton } from 'components';

import styles from './styles';

const LogoButton = connect()(({ navigation, dispatch }) => (
  <TouchableOpacity
    onPress={() => {
      dispatch(MapActions.openMap('posts'));
      navigation.navigate('EventMap');
    }}
  >
    <Image source={images.logo} style={styles.logo} />
  </TouchableOpacity>
));

const EventHeader = ({ navigation, showGlobe = true }) => {
  const currentType = navigation.getParam('type', 'group');
  const tagStyle = tag =>
    showGlobe
      ? styles.tagContainer
      : [styles.tagContainerMap, currentType === tag && styles.tagContainerMapActive];

  return (
    <View style={styles.header}>
      <GradientButton
        style={tagStyle('group')}
        onPress={() => navigation.setParams({ type: 'group' })}
        {...gradients.yellow}
      >
        <Image
          source={images.tagGroup}
          style={[styles.tag, currentType === 'group' && styles.tagActive]}
        />
      </GradientButton>

      <GradientButton
        style={tagStyle('food')}
        onPress={() => navigation.setParams({ type: 'food' })}
        {...gradients.red}
      >
        <Image
          source={images.tagFood}
          style={[styles.tag, currentType === 'food' && styles.tagActive]}
        />
      </GradientButton>

      <GradientButton
        style={tagStyle('art')}
        onPress={() => navigation.setParams({ type: 'art' })}
        {...gradients.purple}
      >
        <Image
          source={images.tagArt}
          style={[styles.tag, currentType === 'art' && styles.tagActive]}
        />
      </GradientButton>

      <GradientButton
        style={tagStyle('offer')}
        onPress={() => navigation.setParams({ type: 'offer' })}
        {...gradients.green}
      >
        <Image
          source={images.tagOffer}
          style={[styles.tag, currentType === 'offer' && styles.tagActive]}
        />
      </GradientButton>

      {showGlobe && <LogoButton navigation={navigation} />}
    </View>
  );
};

export default EventHeader;
