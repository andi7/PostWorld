import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchPosts: null,
  fetchPostsSuccess: ['data'],
  fetchPostsFailed: ['error'],
  selectPost: ['postId'],
  createPost: ['tag', 'body'],
  likePost: ['postId'],
  unlikePost: ['postId']
});

export const PostsTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  loading: true,
  error: null,
  selectedPostId: -1
};

const changeLikeStatus = toLike => (state, { postId }) => {
  const postsCpy = [...state.data];
  const postIndex = postsCpy.findIndex(post => post.id === postId);

  postsCpy[postIndex] = {
    ...postsCpy[postIndex],
    liked: toLike,
    likes: postsCpy[postIndex].likes + (toLike ? 1 : -1)
  };

  return { ...state, data: postsCpy };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_POSTS]: state => ({ ...state, loading: true }),
  [Types.FETCH_POSTS_SUCCESS]: (state, { data }) => ({ ...state, loading: false, data }),
  [Types.FETCH_POSTS_FAILED]: (state, { error }) => ({ ...state, loading: false, error }),
  [Types.SELECT_POST]: (state, { postId }) => ({ ...state, selectedPostId: postId }),
  [Types.LIKE_POST]: changeLikeStatus(true),
  [Types.UNLIKE_POST]: changeLikeStatus(false)
});
