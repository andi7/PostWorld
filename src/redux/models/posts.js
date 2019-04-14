import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchPosts: ['postType', 'sortType'],
  fetchPostsSuccess: ['postType', 'data'],
  fetchPostsFailed: ['postType', 'error'],
  loadMorePosts: ['postType', 'sortType', 'page'],
  selectPost: ['postType', 'postId'],
  createPost: ['tag', 'body'],
  likePost: ['postId'],
  unlikePost: ['postId']
});

export const PostsTypes = Types;
export default Creators;

const model = {
  data: [],
  loading: true,
  loadingMore: false,
  error: null
};

const postTypes = ['all', 'food', 'art'];

const INITIAL_STATE = {
  ...postTypes.reduce((acc, postType) => ({ ...acc, [postType]: model }), {}),

  selectedPostType: null,
  selectedPostId: -1
};

const changeLikeStatus = toLike => (state, { postId }) => ({
  ...state,
  ...postTypes.reduce((acc, postType) => {
    const postsCpy = [...state[postType].data];
    const postIndex = postsCpy.findIndex(post => post.id === postId);

    if (postIndex !== -1) {
      postsCpy[postIndex] = {
        ...postsCpy[postIndex],
        liked: toLike,
        likes: postsCpy[postIndex].likes + (toLike ? 1 : -1)
      };
    }

    return {
      ...acc,
      [postType]: {
        ...state[postType],
        data: postsCpy
      }
    };
  }, {})
});

export const reducer = createReducer(INITIAL_STATE, {
  // Fetch
  [Types.FETCH_POSTS]: (state, { postType }) => ({
    ...state,
    [postType]: { ...state[postType], loading: true }
  }),
  [Types.FETCH_POSTS_SUCCESS]: (state, { postType, data }) => ({
    ...state,
    [postType]: { ...state[postType], loading: false, loadingMore: false, data }
  }),
  [Types.FETCH_POSTS_FAILED]: (state, { postType, error }) => ({
    ...state,
    [postType]: { ...state[postType], loading: false, loadingMore: false, error }
  }),

  // Load More
  [Types.LOAD_MORE_POSTS]: (state, { postType }) => ({
    ...state,
    [postType]: { ...state[postType], loadingMore: true }
  }),

  // Single Post Screen
  [Types.SELECT_POST]: (state, { postType, postId }) => ({
    ...state,
    selectedPostType: postType,
    selectedPostId: postId
  }),

  // Likes
  [Types.LIKE_POST]: changeLikeStatus(true),
  [Types.UNLIKE_POST]: changeLikeStatus(false)
});
