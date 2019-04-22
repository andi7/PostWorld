import React from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import MapActions from 'models/map';

import { IconButton } from 'components';
import { images } from 'theme';
import mapboxConfig from 'config/mapbox';

import MapMarkers from 'domains/map/MapMarkers/MapMarkers';
import PostCard from 'domains/posts/PostCard/PostCard';

import styles from './styles';

const getObjForId = (arr, id) => arr[arr.findIndex(el => el.id === id)];

class MapView extends React.Component {
  state = { detailsVisible: false, selectedMarkerId: null };
  map = React.createRef();

  goBack = () => {
    const { navigation } = this.props;

    this.props.dispatch(MapActions.closeMap());
    navigation.goBack();
  };

  markerPress = (markerId, marker) => {
    console.log(this.map.current, marker);
    this.map.current.moveTo(marker.geometry.coordinates, 400);

    this.setState({ detailsVisible: true, selectedMarkerId: markerId });
  };

  render() {
    const { mapPosts } = this.props;
    const { detailsVisible, selectedMarkerId } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView
          ref={this.map}
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
          <MapMarkers markers={mapPosts} onMarkerPress={this.markerPress} />
        </MapboxGL.MapView>

        <IconButton
          icon={images.arrowLeft}
          iconStyle={styles.backIcon}
          style={styles.backButton}
          onPress={this.goBack}
        />

        <Modal
          isVisible={detailsVisible}
          onBackdropPress={() => this.setState({ detailsVisible: false })}
          onBackButtonPress={() => this.setState({ detailsVisible: false })}
        >
          <PostCard
            item={getObjForId(mapPosts, selectedMarkerId)}
            feedType="map"
            onCommentPress={() => this.setState({ detailsVisible: false })}
          />
        </Modal>
      </View>
    );
  }
}

export default connect(({ location, posts }) => ({
  userLocation: location.data,
  mapPosts: posts.map.data
}))(MapView);
