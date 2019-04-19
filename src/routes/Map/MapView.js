import React from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';

import MapActions from 'models/map';

import { IconButton } from 'components';
import { images } from 'theme';

// import mapboxConfig from 'config/mapbox';

import styles from './styles';

class MapView extends React.Component {
  goBack = () => {
    const { navigation } = this.props;

    this.props.dispatch(MapActions.closeMap());
    navigation.goBack();
  };

  render() {
    const { userLocation } = this.props;
    const markers = [
      {
        id: 1,
        title: 'AAAAAAAA',
        x: userLocation.longitude,
        y: userLocation.latitude
      }
    ];

    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView
          style={{ flex: 1 }}
          showUserLocation
          userTrackingMode={MapboxGL.UserTrackingModes.Follow}
          // styleURL={mapboxConfig.mapStyleUrl}
        >
          {markers.map(marker => (
            <MapboxGL.PointAnnotation
              key={marker.id}
              id={String(marker.id)}
              title={marker.title}
              coordinate={[marker.x, marker.y]}
            />
          ))}
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
