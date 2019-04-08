import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import PostCard from 'domains/posts/PostCard/PostCard';
import PostsActions from 'models/posts';

class PostList extends React.Component {
  componentDidMount() {
    this.props.dispatch(PostsActions.fetchPosts());
  }

  checkComments = post => {
    this.props.navigation.navigate('PostComments', { post });
  };

  like = post => {
    if (post.liked) {
      this.props.dispatch(PostsActions.unlikePost(post.id));
    } else {
      this.props.dispatch(PostsActions.likePost(post.id));
    }
  };

  render() {
    const { posts, loading, userLocation } = this.props;

    if (loading) {
      return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={posts}
        renderItem={({ item }) => (
          <PostCard
            item={item}
            commentPress={() => this.checkComments(item)}
            likePress={() => this.like(item)}
            userLocation={userLocation}
          />
        )}
      />
    );
  }
}

const mapStateToProps = ({ posts, location }) => ({
  loading: posts.loading,
  posts: posts.data,
  userLocation: location.data
});

export default connect(mapStateToProps)(PostList);
