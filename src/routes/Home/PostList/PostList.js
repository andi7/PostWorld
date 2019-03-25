import React from 'react';
import { FlatList } from 'react-native';

import postsFixture from 'fixtures/posts';

import PostCard from '../modules/PostCard/PostCard';

class PostList extends React.Component {
  checkComments = post => {
    this.props.navigation.navigate('PostComments', { post });
  };

  render() {
    const { posts } = this.props;

    return (
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={posts}
        renderItem={({ item }) => (
          <PostCard item={item} commentPress={() => this.checkComments(item)} />
        )}
      />
    );
  }
}

PostList.defaultProps = {
  posts: postsFixture()
};

export default PostList;
