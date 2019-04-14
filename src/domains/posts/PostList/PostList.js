import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import PostCard from 'domains/posts/PostCard/PostCard';
import PostsActions from 'models/posts';

class PostList extends React.Component {
  componentDidMount() {
    const { postType } = this.props;

    this.props.dispatch(PostsActions.fetchPosts(postType));
  }

  checkComments = post => {
    const { postType } = this.props;

    this.props.dispatch(PostsActions.selectPost(postType, post.id));
    this.props.navigation.navigate('PostComments');
  };

  render() {
    const { posts, postType, userLocation } = this.props;
    const { data, loading } = posts[postType];

    if (loading) {
      return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={data}
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
  posts,
  userLocation: location.data
});

export default connect(mapStateToProps)(PostList);
