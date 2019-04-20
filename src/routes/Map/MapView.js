import React from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';

import MapActions from 'models/map';

import { IconButton } from 'components';
import { images } from 'theme';
import mapboxConfig from 'config/mapbox';

import MapMarkers from 'domains/map/MapMarkers/MapMarkers';

import styles from './styles';

const markers = [
  {
    id: 1,
    title: 'AAAAAAAA',
    x: -122.0312186,
    y: 37.33233141,
    type: 'food'
  }
];

class MapView extends React.Component {
  goBack = () => {
    const { navigation } = this.props;

    this.props.dispatch(MapActions.closeMap());
    navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView
          style={{ flex: 1 }}
          // showUserLocation
          userTrackingMode={MapboxGL.UserTrackingModes.Follow}
          styleURL={mapboxConfig.mapStyleUrl}
          pitch={45}
          zoomLevel={19}
          logoEnabled={false}
          pitchEnabled={false}
          compassEnabled={false}
        >
          <MapMarkers markers={markers} />
        </MapboxGL.MapView>

        <IconButton
          icon={images.arrowLeft}
          iconStyle={styles.backIcon}
          style={styles.backButton}
          onPress={this.goBack}
        />
      </View>
    );
  }
}

export default connect(({ location }) => ({ userLocation: location.data }))(MapView);
