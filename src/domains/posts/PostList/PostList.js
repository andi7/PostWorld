import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import PostCard from 'domains/posts/PostCard/PostCard';
import PostsActions from 'models/posts';

import PostListHeader from './PostListHeader';
import styles from './styles';

class PostList extends React.Component {
  state = { sortType: 'hot' };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts = () => {
    const { sortType } = this.state;
    const { postType } = this.props;

    this.props.dispatch(PostsActions.fetchPosts(postType, sortType));
  };

  checkComments = post => {
    const { postType } = this.props;

    this.props.dispatch(PostsActions.selectPost(postType, post.id));
    this.props.navigation.navigate('PostComments');
  };

  changeSort = sortType => {
    if (sortType !== this.state.sortType) {
      this.setState({ sortType }, () => this.updatePosts());
    }
  };

  render() {
    const { sortType } = this.state;
    const { posts, postType, userLocation } = this.props;
    const { data, loading } = posts[postType];

    if (loading) {
      return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    return (
      <FlatList
        contentContainerStyle={styles.postList}
        keyExtractor={item => `${item.id}`}
        data={data}
        ListHeaderComponent={<PostListHeader selected={sortType} onSelect={this.changeSort} />}
        renderItem={({ item }) => (
          <PostCard
            item={item}
            commentPress={() => this.checkComments(item)}
            userLocation={userLocation}
          />
        )}
      />
    );
  }
}

const mapStateToProps = ({ posts, location }) => ({
  posts,
  userLocation: location.data
});

export default connect(mapStateToProps)(PostList);
