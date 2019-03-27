import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import PostCard from 'domains/posts/PostCard/PostCard';
import PostsActions from '../../../redux/PostsRedux';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  checkComments = post => {
    this.props.navigation.navigate('PostComments', { post });
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
          <PostCard item={item} commentPress={() => this.checkComments(item)} />
        )}
      />
    );
  }
}

const mapStateToProps = ({ posts }) => ({ loading: posts.loading, posts: posts.data });
const mapDispatchToProps = dispatch => ({ fetchPosts: () => dispatch(PostsActions.fetchPosts()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
