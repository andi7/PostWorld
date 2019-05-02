import { put, call, select } from 'redux-saga/effects';

import PostsActions from 'models/posts';
import { queryAll, queryMap, create, like, unlike } from 'services/posts';
import { getUser } from 'selectors/auth';
import { getMapActive } from 'selectors/map';
import { getPostsForType, getPostsModelForType } from 'selectors/posts';
import { getUserLocation } from 'selectors/location';

export function* queryMapPosts() {
  const user = yield select(getUser);
  const location = yield select(getUserLocation);

  if (!location) {
    yield put(PostsActions.fetchMapPostsFailure('No Location'));
    return;
  }

  const result = yield call(queryMap, user.id, user.token, location.latitude, location.longitude);

  if (result.data.success) {
    const filteredData = result.data.data.filter(el => el.coordinates[0] !== 0);

    yield put(PostsActions.fetchMapPostsSuccess(filteredData));
  } else {
    yield put(PostsActions.fetchMapPostsFailure(result.data.message));
  }
}

export function* queryPosts({ postType }) {
  const user = yield select(getUser);
  const postModel = yield select(getPostsModelForType, postType);
  const result = yield call(queryAll, user.id, user.token, postType, postModel.sortType, 0);

  if (result.data.success) {
    yield put(PostsActions.fetchPostsSuccess(postType, result.data.data));
  } else {
    yield put(PostsActions.fetchPostsFailed(postType, result.data.message));
  }
}

export function* loadMorePosts({ postType }) {
  const user = yield select(getUser);
  const postModel = yield select(getPostsModelForType, postType);
  const result = yield call(
    queryAll,
    user.id,
    user.token,
    postType,
    postModel.sortType,
    postModel.page
  );

  if (result.data.success) {
    const prevPosts = yield select(getPostsForType, postType);

    yield put(PostsActions.fetchPostsSuccess(postType, prevPosts.concat(result.data.data)));
  } else {
    yield put(PostsActions.fetchPostsFailed(postType, result.data.message));
  }
}

export function* createPost({ tag, body, image }) {
  const user = yield select(getUser);
  const isMapActive = yield select(getMapActive);
  let result;

  if (isMapActive) {
    const userLocation = yield select(getUserLocation);

    result = yield call(
      create,
      user.id,
      user.token,
      tag,
      body,
      image,
      userLocation.latitude,
      userLocation.longitude
    );
  } else {
    result = yield call(create, user.id, user.token, tag, body, image);
  }

  if (result.data.success) {
    yield put(PostsActions.fetchPosts('all', 'new'));

    if (tag !== 'general') {
      yield put(PostsActions.fetchPosts(tag, 'new'));
    }
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
