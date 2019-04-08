import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import { DynamicHeightImage, IconButton } from 'components';
import { images } from 'theme';
import { calcDistance } from 'utils/geolocation';

import styles from './styles';

class PostCard extends React.PureComponent {
  render() {
    const { item, commentPress, likePress, hideComment, hideShare, userLocation } = this.props;

    const distance = 3;

    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <IconButton icon={{ uri: item.user.avatar }} iconStyle={styles.avatar}>
            <Text
              style={[
                styles.userName,
                {
                  marginTop: item.content.text ? -16 : 0
                }
              ]}
            >
              {item.user.name}
            </Text>
          </IconButton>

          {!hideShare && <IconButton icon={images.dots} iconStyle={styles.dots} />}
        </View>

        {!!item.content.text && <Text style={styles.postText}>{item.content.text}</Text>}

        {!!item.content.image && (
          <DynamicHeightImage source={{ uri: item.content.image }} style={styles.postImage} />
        )}

        <View style={styles.footerRow}>
          <IconButton
            icon={images.locationArrow}
            iconStyle={styles.locationIcon}
            style={{ flex: 1, justifyContent: 'flex-start' }}
          >
            <Text style={styles.locationText}>
              {moment(item.created_at).fromNow(true)} - {distance}
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
            onPress={likePress}
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

export default PostCard;
