import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import { DynamicHeightImage, IconButton } from 'components';
import { images } from 'theme';

import styles from './styles';

class PostCard extends React.PureComponent {
  state = { liked: this.props.item.liked };

  like = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { item, commentPress, hideComment, hideShare } = this.props;
    const { liked } = this.state;

    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <IconButton
            icon={{ uri: item.user.avatar }}
            iconStyle={styles.avatar}
            style={[styles.iconButton, { flex: 0 }]}
          >
            <Text style={styles.userName}>{item.user.name}</Text>
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
              {moment(item.created_at).fromNow(true)} - {item.distance}
            </Text>
          </IconButton>

          {!hideComment && (
            <IconButton
              icon={images.comments}
              iconStyle={styles.commentsIcon}
              style={{ flex: 1 }}
              onPress={commentPress}
            >
              <Text style={styles.commentsText}>{item.comments.length} comments</Text>
            </IconButton>
          )}

          <IconButton
            icon={liked ? images.likeActive : images.like}
            iconStyle={styles.likesIcon}
            style={{ flex: 1, justifyContent: 'flex-end' }}
            onPress={this.like}
          >
            <Text style={[styles.likesText, { color: liked ? '#FF5353' : 'black' }]}>
              {item.likes + (item.liked && !liked ? -1 : !item.liked && liked ? 1 : 0)}
            </Text>
          </IconButton>
        </View>
      </View>
    );
  }
}

export default PostCard;
