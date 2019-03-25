import React from 'react';
import { View, ScrollView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';

import { images } from 'theme';

import PostCard from 'domains/posts/PostCard/PostCard';
import CommentCard from 'domains/comments/CommentCard/CommentCard';

import styles from './styles';

class PostComments extends React.Component {
  state = { comment: '' };

  render() {
    const { comment } = this.state;
    const post = this.props.navigation.getParam('post', null);

    console.log(post);

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <PostCard item={post} hideComment hideShare />

          <FlatList
            keyExtractor={item => `${item.id}`}
            data={post.comments}
            renderItem={({ item }) => <CommentCard comment={item} />}
          />
        </ScrollView>

        <View style={styles.composer}>
          <TextInput
            style={styles.composerInput}
            placeholder="Add comment..."
            value={comment}
            onChangeText={val => this.setState({ comment: val })}
          />

          <TouchableOpacity>
            <Image source={images.angleRight} style={styles.submit} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PostComments;
