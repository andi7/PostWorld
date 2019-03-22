import React from 'react';
import { FlatList } from 'react-native';

import posts from 'fixtures/posts';

import PostCard from '../modules/PostCard/PostCard';

class PostList extends React.Component {
  render() {
    return (
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={posts}
        renderItem={({ item }) => <PostCard item={item} />}
      />
    );
  }
}

export default PostList;
