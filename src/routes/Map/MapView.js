import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapboxConfig from 'config/mapbox';

MapboxGL.setAccessToken(mapboxConfig.mapAccessToken);

class MapView extends React.Component {
  render() {
    return (
      <MapboxGL.MapView
        style={{ flex: 1 }}
        showUserLocation
        userTrackingMode={MapboxGL.UserTrackingModes.Follow}
        // styleURL={mapboxConfig.mapStyleUrl}
      />
    );
  }
}

export default MapView;
