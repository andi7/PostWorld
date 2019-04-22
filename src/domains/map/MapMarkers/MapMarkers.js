import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { images, fonts } from 'theme';

const iconsForType = {
  general: images.markerGeneral,
  food: images.markerFood,
  group: images.merkerGroup,
  offer: images.markerOffer,
  art: images.markerArt
};

const collectionForMarkers = markers => ({
  type: 'FeatureCollection',
  features: markers.map(marker => ({
    type: 'Feature',
    properties: {
      id: marker.id,
      iconType: marker.type
    },
    geometry: {
      type: 'Point',
      coordinates: [marker.x, marker.y]
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
    clusterMaxZoom={14}
    images={iconsForType}
    onPress={e => onMarkerPress(e.nativeEvent.payload.properties.id)}
  >
    <MapboxGL.SymbolLayer
      key="{id}"
      id="{id}"
      filter={['!has', 'point_count']}
      style={mapStyles.icon}
      minZoomLevel={1}
    />
  </MapboxGL.ShapeSource>
);

const mapStyles = MapboxGL.StyleSheet.create({
  icon: {
    iconImage: '{iconType}',
    iconSize: 1,
    textSize: 20,
    textField: '10',
    textColor: '#fff',
    iconAllowOverlap: true,
    textAllowOverlap: true,
    iconAnchor: 'bottom',
    textAnchor: 'bottom',
    textOffset: [0, -1]
  },
  clusterPoints: {
    iconImage: '{iconType}',
    iconSize: 0.4,
    textField: '+{point_count}',
    textColor: '#fff',
    textSize: 25,
    iconAllowOverlap: true,
    textAllowOverlap: true,
    iconAnchor: 'bottom',
    textAnchor: 'bottom'
  }
});

export default MapMarker;
