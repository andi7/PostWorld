import React from 'react';
import { FlatList } from 'react-native';

import posts from 'fixtures/posts';

import PostCard from '../modules/PostCard/PostCard';

class PostList extends React.Component {
  checkComments = post => {
    this.props.navigation.navigate('PostComments', { post });
  };

  render() {
    return (
      <FlatList
        style={{ backgroundColor: 'black' }}
        keyExtractor={item => `${item.id}`}
        data={posts}
        renderItem={({ item }) => (
          <PostCard item={item} commentPress={() => this.checkComments(item)} />
        )}
      />
    );
  }
}

export default PostList;
