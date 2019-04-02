import { put, call, select } from 'redux-saga/effects';

import postsFixture from 'fixtures/posts';
import PostsActions from 'models/posts';
import { queryAll } from 'services/posts';
import { getUser } from 'selectors/auth';

const queryAllFixture = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(postsFixture());
    }, 1000);
  });

const transformPosts = posts =>
  posts.map(post => ({
    id: post.id,
    user: {
      name: post.author,
      avatar: ''
    },
    content: {
      image: '',
      text: post.body
    },
    distance: 3,
    comments: post.comments,
    likes: post.likes,
    liked: false,
    created_at: 1553782682.3891044
  }));

export function* queryPosts() {
  const user = yield select(getUser);
  const result = yield call(queryAll, user.id, user.token);

  if (result.data.success) {
    yield put(PostsActions.fetchPostsSuccess(postsFixture()));

    // yield put(PostsActions.fetchPostsSuccess(transformPosts(result.data.data)));
  } else {
    yield put(PostsActions.fetchPostsFailed(result.data.message));
  }
}
