import React from 'react';
import { Image, Text } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { images } from 'theme';

import styles from './styles';

const iconsForType = {
  general: images.markerGeneral,
  food: images.markerFood,
  group: images.merkerGroup,
  offer: images.markerOffer,
  art: images.markerArt
};

const MapMarker = ({ data: { x, y, id, title, type } }) => (
  <MapboxGL.PointAnnotation id={String(id)} title={title} coordinate={[x, y]}>
    <Image style={styles.marker} source={iconsForType[type]} />

    <Text style={styles.markerTitle}>10</Text>
  </MapboxGL.PointAnnotation>
);

export default MapMarker;
