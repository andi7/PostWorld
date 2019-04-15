import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

import { DynamicHeightImage, IconButton } from 'components';
import { images } from 'theme';
import { calcDistance } from 'utils/geolocation';

import PostsActions from 'models/posts';

import styles from './styles';

class PostCard extends React.PureComponent {
  like = post => {
    if (post.liked) {
      this.props.dispatch(PostsActions.unlikePost(post.id));
    } else {
      this.props.dispatch(PostsActions.likePost(post.id));
    }
  };

  render() {
    const { item, commentPress, hideComment, hideShare, userLocation } = this.props;

    const distance =
      userLocation && item.coordinates && item.coordinates[0] !== 0 && item.coordinates[1] !== 0
        ? calcDistance(userLocation.latitude, userLocation.longitude, ...item.coordinates).toFixed(
            1
          )
        : '';

    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <IconButton icon={{ uri: item.avatar }} iconStyle={styles.avatar}>
            <Text
              style={[
                styles.userName,
                {
                  marginTop: item.body ? -16 : 0
                }
              ]}
            >
              {item.author}
            </Text>
          </IconButton>

          {!hideShare && <IconButton icon={images.dots} iconStyle={styles.dots} />}
        </View>

        {!!item.body && <Text style={styles.postText}>{item.body}</Text>}

        {!!item.image && (
          <DynamicHeightImage source={{ uri: item.image }} style={styles.postImage} />
        )}

        <View style={styles.footerRow}>
          <IconButton
            icon={distance && images.logo}
            iconStyle={styles.locationIcon}
            style={{ flex: 1, justifyContent: 'flex-start' }}
          >
            <Text style={styles.locationText}>
              {moment.unix(item.created).fromNow(false)}
              {distance && ` - ${distance}km`}
            </Text>
          </IconButton>

          {!hideComment && (
            <IconButton
              icon={images.comments}
              iconStyle={styles.commentsIcon}
              style={{ flex: 1 }}
              onPress={commentPress}
            >
              <Text style={styles.commentsText}>{item.comments}</Text>
            </IconButton>
          )}

          <IconButton
            icon={item.liked ? images.likeActive : images.like}
            iconStyle={styles.likesIcon}
            style={{ flex: 1, justifyContent: 'flex-end' }}
            onPress={() => this.like(item)}
          >
            <Text style={[styles.likesText, { color: item.liked ? '#FF5353' : '#3B3B3BC0' }]}>
              {item.likes}
            </Text>
          </IconButton>
        </View>
      </View>
    );
  }
}

export default connect()(PostCard);
