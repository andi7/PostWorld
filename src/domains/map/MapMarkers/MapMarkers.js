import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { images } from 'theme';

const iconsForType = {
  general: images.markerGeneral,
  food: images.markerFood,
  group: images.merkerGroup,
  offer: images.markerOffer,
  art: images.markerArt,
  cluster: images.cluster
};

const collectionForMarkers = markers => ({
  type: 'FeatureCollection',
  features: markers.map(marker => ({
    type: 'Feature',
    properties: {
      id: marker.id,
      iconType: marker.post_type,
      text: marker.likes
    },
    geometry: {
      type: 'Point',
      coordinates: marker.coordinates
    }
  })),
  maxzoom: 22,
  minzoom: 1
});

const MapMarker = ({ markers, onMarkerPress }) => (
  <MapboxGL.ShapeSource
    id="ShapeSource"
    shape={collectionForMarkers(markers)}
    cluster
    clusterRadius={80}
    images={iconsForType}
    onPress={e => {
      onMarkerPress(e.nativeEvent.payload.properties.id, e.nativeEvent.payload);
    }}
  >
    <MapboxGL.SymbolLayer
      key="{id}"
      id="{id}"
      filter={['!has', 'point_count']}
      style={mapStyles.icon}
      minZoomLevel={1}
    />

    <MapboxGL.SymbolLayer
      id="clusteredPoints"
      filter={['has', 'point_count']}
      style={mapStyles.clusterPoints}
    />
  </MapboxGL.ShapeSource>
);

const mapStyles = MapboxGL.StyleSheet.create({
  icon: {
    iconImage: '{iconType}',
    iconSize: 0.9,
    textSize: 16,
    textField: '{text}',
    textColor: '#fff',
    iconAllowOverlap: false,
    textAllowOverlap: false,
    iconAnchor: 'bottom',
    textAnchor: 'bottom',
    textOffset: [0, -1.3]
  },
  clusterPoints: {
    iconImage: 'cluster',
    iconSize: 1,
    textField: '+{point_count}',
    textColor: '#fff',
    textSize: 22,
    iconAllowOverlap: false,
    textAllowOverlap: false
  }
});

export default MapMarker;
