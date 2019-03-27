import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { StartupTypes } from '../redux/StartupRedux';
import { PostsTypes } from '../redux/PostsRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { queryPosts } from './PostsSagas';

/* ------------- API ------------- */

// const api = useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PostsTypes.FETCH_POSTS, queryPosts)
  ]);
}
