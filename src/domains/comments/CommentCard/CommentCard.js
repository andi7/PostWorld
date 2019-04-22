import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import { images } from 'theme';
import { IconButton } from 'components';

import styles from './styles';

const CommentCard = ({ comment, likePress }) => {
  const avatar = comment.user.avatar ? { uri: comment.user.avatar } : images.user;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <IconButton icon={avatar} iconStyle={styles.avatar} style={styles.iconButton}>
          <Text style={styles.userName}>{comment.user.name}</Text>
        </IconButton>
      </View>

      <Text style={styles.postText}>{comment.body}</Text>

      <View style={styles.footerRow}>
        <Text style={styles.timeText}>{moment.unix(comment.created_at).fromNow(true)} ago</Text>

        <IconButton
          icon={comment.liked ? images.likeActive : images.like}
          iconStyle={styles.likesIcon}
          onPress={likePress}
        >
          <Text style={[styles.likesText, { color: comment.liked ? '#FF5353' : '#3B3B3B' }]}>
            {comment.likes}
          </Text>
        </IconButton>
      </View>
    </View>
  );
};

export default CommentCard;
