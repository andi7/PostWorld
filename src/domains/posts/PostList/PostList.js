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
    const { posts, loading } = this.props;

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
          />
        )}
      />
    );
  }
}

const mapStateToProps = ({ posts }) => ({ loading: posts.loading, posts: posts.data });

export default connect(mapStateToProps)(PostList);
