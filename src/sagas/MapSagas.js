import { put, call, select } from 'redux-saga/effects';

import MapActions from 'models/map';
import { getUser } from 'selectors/auth';
import { getUserLocation } from 'selectors/location';

import { queryPosts } from 'services/map';

export function* queryMapPosts() {
  const user = yield select(getUser);
  const location = yield select(getUserLocation);
  const result = yield call(queryPosts, user.id, user.token, location.latitude, location.longitude);

  if (result.data.success) {
    yield put(MapActions.fetchMapPostsSuccess(result.data.data));
  } else {
    yield put(MapActions.fetchMapPostsFailed(result.data.message));
  }
}
