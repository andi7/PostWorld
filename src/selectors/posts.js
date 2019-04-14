export const getSelectedPost = state =>
  state.posts.data[state.posts.data.findIndex(post => post.id === state.posts.selectedPostId)];
