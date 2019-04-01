import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { StartupTypes } from 'models/startup';
import { AuthTypes } from 'models/auth';
import { PostsTypes } from 'models/posts';
import { CommentsTypes } from 'models/comments';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { signInByEmail, signUpByEmail } from './AuthSagas';
import { queryPosts } from './PostsSagas';
import { queryComments, postComment } from './CommentsSagas';

/* ------------- API ------------- */

// const api = useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(AuthTypes.SIGN_IN_BY_EMAIL, signInByEmail),
    takeLatest(AuthTypes.SIGN_UP_BY_EMAIL, signUpByEmail),
    takeLatest(PostsTypes.FETCH_POSTS, queryPosts),
    takeLatest(CommentsTypes.FETCH_COMMENTS, queryComments),
    takeLatest(CommentsTypes.POST_COMMENT, postComment)
  ]);
}
