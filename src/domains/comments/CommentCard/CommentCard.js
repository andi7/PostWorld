import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import { images } from 'theme';
import { IconButton } from 'components';

import styles from './styles';

const CommentCard = ({ comment }) => (
  <View style={styles.card}>
    <View style={styles.topRow}>
      <IconButton
        icon={{ uri: comment.user.avatar }}
        iconStyle={styles.avatar}
        style={styles.iconButton}
      >
        <Text style={styles.userName}>{comment.user.name}</Text>
      </IconButton>
    </View>

    <Text style={styles.postText}>{comment.text}</Text>

    <View style={styles.footerRow}>
      <Text style={styles.timeText}>{moment(comment.created_at).fromNow(true)}</Text>

      <IconButton
        icon={comment.liked ? images.likeActive : images.like}
        iconStyle={styles.likesIcon}
        n
      >
        <Text style={[styles.likesText, { color: comment.liked ? '#FF5353' : 'black' }]}>
          {comment.likes}
        </Text>
      </IconButton>
    </View>
  </View>
);

export default CommentCard;
