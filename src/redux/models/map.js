import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  openMap: ['mapType'],
  closeMap: [],
  setMapType: ['mapType'],

  fetchMapPosts: [],
  fetchMapPostsSuccess: ['data'],
  fetchMapPostsFailure: ['error']
});

export const MapTypes = Types;
export default Creators;

const INITIAL_STATE = {
  mapType: true,
  isActive: null,

  posts: {
    data: [],
    loading: false,
    error: false
  },

  events: {
    data: [],
    loading: false,
    error: false
  }
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_MAP]: (state, { mapType }) => ({ ...state, isActive: true, mapType }),
  [Types.CLOSE_MAP]: state => ({ ...state, isActive: false }),
  [Types.SET_MAP_TYPE]: (state, { mapType }) => ({ ...state, mapType }),

  // Map Posts
  [Types.FETCH_MAP_POSTS]: state => ({
    ...state,
    posts: { ...state.posts, loading: true }
  }),
  [Types.FETCH_MAP_POSTS_SUCCESS]: (state, { data }) => ({
    ...state,
    posts: { ...state.posts, data, loading: false }
  }),
  [Types.FETCH_MAP_POSTS_FAILURE]: (state, { error }) => ({
    ...state,
    posts: { ...state.posts, error, loading: false }
  })
});
