import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchComments: ['postId'],
  fetchCommentsSuccess: ['data'],
  fetchCommentsFailed: ['error'],
  reset: [],
  postComment: ['comment', 'postId'],
  likeComment: ['commentId'],
  unlikeComment: ['commentId']
});

export const CommentsTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  loading: true,
  error: null
};

const changeLikeStatus = toLike => (state, { commentId }) => {
  const commentsCpy = [...state.data];
  const commentIndex = commentsCpy.findIndex(post => post.id === commentId);

  commentsCpy[commentIndex] = {
    ...commentsCpy[commentIndex],
    liked: toLike,
    likes: commentsCpy[commentIndex].likes + (toLike ? 1 : -1)
  };

  return { ...state, data: commentsCpy };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_COMMENTS]: state => ({ ...state, loading: true }),
  [Types.FETCH_COMMENTS_SUCCESS]: (state, { data }) => ({ ...state, loading: false, data }),
  [Types.FETCH_COMMENTS_FAILED]: (state, { error }) => ({ ...state, loading: false, error }),
  [Types.RESET]: () => INITIAL_STATE,
  [Types.LIKE_COMMENT]: changeLikeStatus(true),
  [Types.UNLIKE_COMMENT]: changeLikeStatus(false)
});
