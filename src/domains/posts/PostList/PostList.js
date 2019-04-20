import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import PostCard from 'domains/posts/PostCard/PostCard';
import PostsActions from 'models/posts';

import PostListHeader from './PostListHeader';
import styles from './styles';

const PAGE_SIZE = 25;

class PostList extends React.Component {
  componentDidMount() {
    const { posts, postType } = this.props;

    this.resetPosts(posts[postType].sortType);
  }

  changeSort = sortType => {
    const { posts, postType } = this.props;

    if (sortType !== posts[postType].sortType) {
      this.resetPosts(sortType);
    }
  };

  resetPosts = sortType => {
    const { postType } = this.props;

    this.props.dispatch(PostsActions.fetchPosts(postType, sortType, 0));
  };

  loadNextPage = () => {
    const { posts, postType } = this.props;
    const { data, loading, loadingMore, page } = posts[postType];

    if (!(loading || loadingMore || data.length < (page + 1) * PAGE_SIZE)) {
      this.props.dispatch(PostsActions.loadMorePosts(postType));
    }
  };

  checkComments = post => {
    const { postType } = this.props;

    this.props.dispatch(PostsActions.selectPost(postType, post.id));
    this.props.navigation.navigate('PostComments');
  };

  render() {
    const { posts, postType } = this.props;
    const { data, loading, loadingMore, sortType } = posts[postType];

    return (
      <View style={{ flex: 1 }}>
        <PostListHeader selected={sortType} onSelect={this.changeSort} />

        {loading ? (
          <ActivityIndicator size="large" style={{ flex: 1 }} />
        ) : (
          <FlatList
            contentContainerStyle={styles.postList}
            keyExtractor={item => `${item.id}`}
            data={data}
            ListFooterComponent={
              loadingMore && <ActivityIndicator style={styles.loadingMore} size="small" />
            }
            renderItem={({ item }) => (
              <PostCard item={item} commentPress={() => this.checkComments(item)} />
            )}
            onEndReached={this.loadNextPage}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
});

export default connect(mapStateToProps)(PostList);
