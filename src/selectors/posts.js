export const getSelectedPost = state => {
  const posts = state.posts;
  const postsData = posts[posts.selectedPostType].data;

  return postsData[postsData.findIndex(post => post.id === posts.selectedPostId)];
};
