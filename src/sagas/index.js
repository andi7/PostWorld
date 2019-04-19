import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { StartupTypes } from 'models/startup';
import { AuthTypes } from 'models/auth';
import { PostsTypes } from 'models/posts';
import { CommentsTypes } from 'models/comments';
import { LocationTypes } from 'models/location';
import { MapTypes } from 'models/map';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { signInByEmail, signUpByEmail } from './AuthSagas';
import { queryPosts, loadMorePosts, createPost, likePost, unlikePost } from './PostsSagas';
import { queryComments, postComment, likeComment, unlikeComment } from './CommentsSagas';
import { startTracking } from './LocationSagas';
import { queryMapPosts } from './MapSagas';

/* ------------- API ------------- */

// const api = useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // STARTUP
    takeLatest(StartupTypes.STARTUP, startup),

    // AUTH
    takeLatest(AuthTypes.SIGN_IN_BY_EMAIL, signInByEmail),
    takeLatest(AuthTypes.SIGN_UP_BY_EMAIL, signUpByEmail),

    // POSTS
    takeLatest(PostsTypes.FETCH_POSTS, queryPosts),
    takeLatest(PostsTypes.LOAD_MORE_POSTS, loadMorePosts),
    takeLatest(PostsTypes.CREATE_POST, createPost),
    takeLatest(PostsTypes.LIKE_POST, likePost),
    takeLatest(PostsTypes.UNLIKE_POST, unlikePost),

    // COMMENTS
    takeLatest(CommentsTypes.FETCH_COMMENTS, queryComments),
    takeLatest(CommentsTypes.POST_COMMENT, postComment),
    takeLatest(CommentsTypes.LIKE_COMMENT, likeComment),
    takeLatest(CommentsTypes.UNLIKE_COMMENT, unlikeComment),

    // LOCATION
    takeLatest(LocationTypes.START_TRACKING, startTracking),

    // MAP
    takeLatest(MapTypes.FETCH_MAP_POSTS, queryMapPosts)
  ]);
}
