import React from 'react';
import { FlatList } from 'react-native';

import posts from '../../fixtures/posts';
import PostCard from './modules/PostCard/PostCard';

class Feed extends React.Component {
  render() {
    console.log(posts);

    return (
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={posts}
        renderItem={({ item }) => <PostCard item={item} />}
      />
    );
  }
}

export default Feed;
