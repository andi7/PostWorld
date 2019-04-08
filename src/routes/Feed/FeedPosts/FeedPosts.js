import React from 'react';

import PostList from 'domains/posts/PostList/PostList';

class Feed extends React.Component {
  render() {
    return <PostList navigation={this.props.navigation} />;
  }
}

export default Feed;
