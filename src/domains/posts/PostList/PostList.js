import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import PostCard from 'domains/posts/PostCard/PostCard';
import PostsActions from 'models/posts';
import { queryAll } from 'services/posts';

class PostList extends React.Component {
  componentDidMount() {
    this.props.dispatch(PostsActions.fetchPosts());
  }

  checkComments = post => {
    this.props.navigation.navigate('PostComments', { post });
  };

  render() {
    const { posts, postType, loading, userLocation } = this.props;

    if (loading) {
      return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={posts.filter(post => post.post_type === postType)}
        renderItem={({ item }) => (
          <PostCard
            item={item}
            commentPress={() => this.checkComments(item)}
            userLocation={userLocation}
          />
        )}
        onEndReached={this.loadMore}
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
