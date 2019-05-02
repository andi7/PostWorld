import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchPosts: ['postType', 'sortType'],
  fetchPostsSuccess: ['postType', 'data'],
  fetchPostsFailed: ['postType', 'error'],

  fetchMapPosts: [],
  fetchMapPostsSuccess: ['data'],
  fetchMapPostsFailure: ['error'],

  loadMorePosts: ['postType'],
  selectPost: ['postType', 'postId'],
  createPost: ['tag', 'body', 'image'],
  likePost: ['postId'],
  unlikePost: ['postId']
});

export const PostsTypes = Types;
export default Creators;

const model = {
  data: [],
  loading: true,
  loadingMore: false,
  error: null,
  sortType: 'hot',
  page: 0
};

const postTypes = ['all', 'food', 'art', 'map'];

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
  [Types.FETCH_POSTS]: (state, { postType, sortType }) => ({
    ...state,
    [postType]: { ...state[postType], loading: true, sortType, page: 0 }
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
    [postType]: { ...state[postType], loadingMore: true, page: state[postType].page + 1 }
  }),

  // Map Posts
  [Types.FETCH_MAP_POSTS]: state => ({
    ...state,
    map: { ...state.map, loading: true }
  }),
  [Types.FETCH_MAP_POSTS_SUCCESS]: (state, { data }) => ({
    ...state,
    map: { ...state.map, data, loading: false }
  }),
  [Types.FETCH_MAP_POSTS_FAILURE]: (state, { error }) => ({
    ...state,
    map: { ...state.posts, error, loading: false }
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
