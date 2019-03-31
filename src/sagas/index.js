import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { StartupTypes } from 'models/startup';
import { PostsTypes } from 'models/posts';
import { AuthTypes } from 'models/auth';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { queryPosts } from './PostsSagas';
import { signInByEmail, signUpByEmail } from './AuthSagas';

/* ------------- API ------------- */

// const api = useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PostsTypes.FETCH_POSTS, queryPosts),
    takeLatest(AuthTypes.SIGN_IN_BY_EMAIL, signInByEmail),
    takeLatest(AuthTypes.SIGN_UP_BY_EMAIL, signUpByEmail)
  ]);
}
