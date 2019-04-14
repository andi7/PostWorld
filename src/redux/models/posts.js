import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchPosts: ['postType'],
  fetchPostsSuccess: ['postType', 'data'],
  fetchPostsFailed: ['postType', 'error'],
  selectPost: ['postType', 'postId'],
  createPost: ['tag', 'body'],
  likePost: ['postType', 'postId'],
  unlikePost: ['postType', 'postId']
});

export const PostsTypes = Types;
export default Creators;

const model = {
  data: [],
  loading: true,
  error: null
};

const INITIAL_STATE = {
  general: model,
  art: model,
  food: model,

  selectedPostType: null,
  selectedPostId: -1
};

const changeLikeStatus = toLike => (state, { postId, postType }) => {
  const postsCpy = [...state[postType].data];
  const postIndex = postsCpy.findIndex(post => post.id === postId);

  postsCpy[postIndex] = {
    ...postsCpy[postIndex],
    liked: toLike,
    likes: postsCpy[postIndex].likes + (toLike ? 1 : -1)
  };

  return { ...state, [postType]: { ...state[postType], data: postsCpy } };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_POSTS]: (state, { postType }) => ({
    ...state,
    [postType]: { ...state[postType], loading: true }
  }),
  [Types.FETCH_POSTS_SUCCESS]: (state, { postType, data }) => ({
    ...state,
    [postType]: { ...state[postType], loading: false, data }
  }),
  [Types.FETCH_POSTS_FAILED]: (state, { postType, error }) => ({
    ...state,
    [postType]: { ...state[postType], loading: false, error }
  }),
  [Types.SELECT_POST]: (state, { postType, postId }) => ({
    ...state,
    selectedPostType: postType,
    selectedPostId: postId
  }),
  [Types.LIKE_POST]: changeLikeStatus(true),
  [Types.UNLIKE_POST]: changeLikeStatus(false)
});
