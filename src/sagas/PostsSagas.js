import { put, call, select } from 'redux-saga/effects';

import PostsActions from 'models/posts';
import { queryAll, create, like, unlike } from 'services/posts';
import { getUser } from 'selectors/auth';

export function* queryPosts({ postType }) {
  const user = yield select(getUser);
  const result = yield call(queryAll, user.id, user.token, postType);

  if (result.data.success) {
    yield put(PostsActions.fetchPostsSuccess(postType, result.data.data));
  } else {
    yield put(PostsActions.fetchPostsFailed(postType, result.data.message));
  }
}

export function* createPost({ tag, body }) {
  const user = yield select(getUser);
  const result = yield call(create, user.id, user.token, tag, body);

  if (result.data.success) {
    yield put(PostsActions.fetchPosts(tag));
  }
}

export function* likePost({ postId }) {
  const user = yield select(getUser);
  yield call(like, user.id, user.token, postId);
}

export function* unlikePost({ postId }) {
  const user = yield select(getUser);
  yield call(unlike, user.id, user.token, postId);
}
