import { createActions, createReducer } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const INITIAL_STATE = {
  posts: []
};

const { Types, Creators } = createActions({
  fetch: null
});

export const PostsTypes = Types;
export default Creators;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH]: state => state
});
