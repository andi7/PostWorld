import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import PostCard from 'domains/posts/PostCard/PostCard';
import PostsActions from 'models/posts';

import PostListHeader from './PostListHeader';
import styles from './styles';

const PAGE_SIZE = 25;

class PostList extends React.Component {
  state = { sortType: 'hot', page: 0 };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts = () => {
    const { sortType, page } = this.state;
    const { postType } = this.props;

    this.props.dispatch(PostsActions.fetchPosts(postType, sortType, page));
  };

  checkComments = post => {
    const { postType } = this.props;

    this.props.dispatch(PostsActions.selectPost(postType, post.id));
    this.props.navigation.navigate('PostComments');
  };

  changeSort = sortType => {
    if (sortType !== this.state.sortType) {
      this.setState({ sortType, page: 0 }, () => this.updatePosts());
    }
  };

  loadNextPage = () => {
    const { page, sortType } = this.state;
    const { posts, postType } = this.props;
    const { data, loading, loadingMore } = posts[postType];

    if (loading || loadingMore || data.length < (page + 1) * PAGE_SIZE) {
      return;
    }

    this.setState({ page: page + 1 }, () =>
      this.props.dispatch(PostsActions.loadMorePosts(postType, sortType, page + 1))
    );
  };

  render() {
    const { sortType } = this.state;
    const { posts, postType, userLocation } = this.props;
    const { data, loading, loadingMore } = posts[postType];

    if (loading) {
      return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
      <FlatList
        contentContainerStyle={styles.postList}
        keyExtractor={item => `${item.id}`}
        data={data}
        ListHeaderComponent={<PostListHeader selected={sortType} onSelect={this.changeSort} />}
        ListFooterComponent={
          loadingMore && <ActivityIndicator style={styles.loadingMore} size="small" />
        }
        renderItem={({ item }) => (
          <PostCard
            item={item}
            commentPress={() => this.checkComments(item)}
            userLocation={userLocation}
          />
        )}
        onEndReached={this.loadNextPage}
      />
    );
  }
}

const mapStateToProps = ({ posts, location }) => ({
  posts,
  userLocation: location.data
});

export default connect(mapStateToProps)(PostList);
