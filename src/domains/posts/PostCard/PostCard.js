import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import ActionSheet from 'react-native-action-sheet';

import { DynamicHeightImage, IconButton } from 'components';
import { images } from 'theme';
import api from 'config/api';
import { calcDistance } from 'utils/geolocation';

import PostsActions from 'models/posts';
import * as NavigationUtils from 'utils/navigation';

import styles from './styles';

const BUTTONS = ['Block', 'Report', 'Delete', 'Cancel'];
const DESTRUCTIVE_INDEX = 2;

class PostCard extends React.PureComponent {
  like = post => {
    if (post.liked) {
      this.props.dispatch(PostsActions.unlikePost(post.id));
    } else {
      this.props.dispatch(PostsActions.likePost(post.id));
    }
  };

  checkComments = () => {
    const { item, feedType, onCommentPress } = this.props;

    if (onCommentPress) {
      onCommentPress();
    }

    this.props.dispatch(PostsActions.selectPost(feedType || item.postType, item.id));
    NavigationUtils.navigate('PostComments');
  };

  openActionSheet = () => {
    const { user, item } = this.props;
    const isPostAuthor = item.author === user.username;

    const dynamicButtons = isPostAuthor ? BUTTONS : BUTTONS.filter(el => el !== 'Delete');

    ActionSheet.showActionSheetWithOptions(
      {
        options: dynamicButtons,
        cancelButtonIndex: dynamicButtons.length - 1,
        destructiveButtonIndex: isPostAuthor ? DESTRUCTIVE_INDEX : BUTTONS.length
      },
      buttonIndex => {
        console.log('button clicked :', buttonIndex);
      }
    );
  };

  render() {
    const { item, hideComment, hideShare, userLocation } = this.props;

    const distance =
      userLocation &&
      item.coordinates &&
      item.coordinates[0] !== 0 &&
      item.coordinates[1] !== 0 &&
      calcDistance(userLocation.latitude, userLocation.longitude, ...item.coordinates).toFixed(1);

    const avatar = item.author.profile_image
      ? { uri: api.imageUrl.concat(item.author.profile_image) }
      : images.user;

    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <IconButton icon={avatar} iconStyle={styles.avatar}>
            <Text
              style={[
                styles.userName,
                {
                  marginTop: item.body ? -16 : 0
                }
              ]}
            >
              {item.author.username}
            </Text>
          </IconButton>

          {!hideShare && (
            <IconButton onPress={this.openActionSheet} icon={images.dots} iconStyle={styles.dots} />
          )}
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
              onPress={this.checkComments}
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

const mapStateToProps = ({ auth, location }) => ({
  user: auth.user,
  userLocation: location.data
});

export default connect(mapStateToProps)(PostCard);
