import React from 'react';

import PostList from 'domains/posts/PostList/PostList';

class Feed extends React.Component {
  componentDidMount() {
    console.log(navigator.geolocation);

    navigator.geolocation.requestAuthorization();
  }

  render() {
    return <PostList navigation={this.props.navigation} />;
  }
}

export default Feed;
