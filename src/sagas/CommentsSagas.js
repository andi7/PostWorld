import { put, call, select } from 'redux-saga/effects';

import CommentsActions from 'models/comments';
import { queryAll, create, like, unlike } from 'services/comments';
import { getUser } from 'selectors/auth';

const transformComments = comments =>
  comments.map(comment => ({
    id: comment.id,
    user: {
      name: comment.author,
      avatar: ''
    },
    text: '',
    likes: comment.likes,
    liked: false,
    created_at: 1553782682
  }));

export function* queryComments({ postId }) {
  const user = yield select(getUser);
  const result = yield call(queryAll, postId, user.id, user.token);

  if (result.data.success) {
    yield put(CommentsActions.fetchCommentsSuccess(transformComments(result.data.data)));
  } else {
    yield put(CommentsActions.fetchCommentsFailed(result.data.message));
  }
}

export function* postComment({ comment, postId }) {
  const user = yield select(getUser);
  const result = yield call(create, comment, postId, user.id, user.token);

  console.log(result);

  if (result.data.success) {
    yield put(CommentsActions.fetchComments(postId));
  }
}

export function* likeComment({ commentId }) {
  const user = yield select(getUser);
  yield call(like, user.id, user.token, commentId);
}

export function* unlikeComment({ commentId }) {
  const user = yield select(getUser);
  yield call(unlike, user.id, user.token, commentId);
}
