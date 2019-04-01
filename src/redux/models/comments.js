import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchComments: ['postId'],
  fetchCommentsSuccess: ['data'],
  fetchCommentsFailed: ['error'],
  reset: [],
  postComment: ['comment', 'postId']
});

export const CommentsTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  loading: true,
  error: null
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_COMMENTS]: state => ({ ...state, loading: true }),
  [Types.FETCH_COMMENTS_SUCCESS]: (state, { data }) => ({ ...state, loading: false, data }),
  [Types.FETCH_COMMENTS_FAILED]: (state, { error }) => ({ ...state, loading: false, error }),
  [Types.RESET]: () => INITIAL_STATE
});
