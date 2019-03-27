import { put, call } from 'redux-saga/effects';

import postsFixture from 'fixtures/posts';

import PostsActions from '../redux/PostsRedux';

const queryAll = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(postsFixture());
    }, 1000);
  });

export function* queryPosts() {
  const result = yield call(queryAll);

  yield put(PostsActions.fetchPostsSuccess(result));
}
