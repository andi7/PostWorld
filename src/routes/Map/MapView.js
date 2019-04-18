import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';

import MapActions from 'models/map';

import mapboxConfig from 'config/mapbox';

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
          showUserLocation
          userTrackingMode={MapboxGL.UserTrackingModes.Follow}
          // styleURL={mapboxConfig.mapStyleUrl}
        />

        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'red',
            position: 'absolute',
            top: 20,
            left: 20
          }}
          onPress={this.goBack}
        />
      </View>
    );
  }
}

export default connect()(MapView);
