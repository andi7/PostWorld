import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchPosts: null,
  fetchPostsSuccess: ['data'],
  fetchPostsFailed: ['error']
});

export const PostsTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  loading: true,
  error: null
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_POSTS]: state => ({ ...state, loading: true }),
  [Types.FETCH_POSTS_SUCCESS]: (state, { data }) => ({ ...state, loading: false, data }),
  [Types.FETCH_POSTS_FAILED]: (state, { error }) => ({ ...state, loading: false, error })
});
