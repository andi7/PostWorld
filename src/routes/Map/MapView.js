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
import EventHeader from 'domains/events/EventHeader/EventHeader';

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
    this.map.current.flyTo(marker.geometry.coordinates, 400);

    if (markerId) {
      this.setState({ detailsVisible: true, selectedMarkerId: markerId });
    }
  };

  render() {
    const { mapPosts, mapType } = this.props;
    const { detailsVisible, selectedMarkerId } = this.state;

    const data = mapType === 'posts' ? mapPosts : [];

    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          ref={this.map}
          style={{ flex: 1 }}
          showUserLocation={false}
          userTrackingMode={MapboxGL.UserTrackingModes.Follow}
          centerCoordinate={[-122.0312186, 37.33233141]}
          styleURL={mapboxConfig.mapStyleUrl}
          pitch={45}
          zoomLevel={19}
          minZoomLevel={15}
          maxZoomLevel={19}
          logoEnabled={false}
          pitchEnabled={false}
          compassEnabled={false}
        >
          <MapMarkers markers={data} onMarkerPress={this.markerPress} />
        </MapboxGL.MapView>

        <View style={styles.eventsHeader}>
          <IconButton
            icon={images.arrowLeft}
            iconStyle={styles.backIcon}
            style={styles.backButton}
            onPress={this.goBack}
          />

          {mapType === 'events' && (
            <EventHeader navigation={this.props.navigation} showGlobe={false} />
          )}
        </View>

        <Modal
          isVisible={detailsVisible}
          backdropOpacity={0}
          onBackdropPress={() => this.setState({ detailsVisible: false })}
          onBackButtonPress={() => this.setState({ detailsVisible: false })}
        >
          <PostCard
            item={getObjForId(mapPosts, selectedMarkerId)}
            feedType="map"
            onCommentPress={() => this.setState({ detailsVisible: false })}
            expanded
          />
        </Modal>
      </View>
    );
  }
}

export default connect(({ location, posts, map }) => ({
  userLocation: location.data,
  mapPosts: posts.map.data,
  mapType: map.mapType
}))(MapView);
