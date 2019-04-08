import { put, call, select } from 'redux-saga/effects';

import postsFixture from 'fixtures/posts';
import PostsActions from 'models/posts';
import { queryAll, create, like, unlike } from 'services/posts';
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
    coordinates: post.coordinates,
    comments: post.comments,
    likes: post.likes,
    liked: post.liked,
    created_at: 1553782682.3891044
  }));

export function* queryPosts() {
  const user = yield select(getUser);
  const result = yield call(queryAll, user.id, user.token);

  if (result.data.success) {
    yield put(PostsActions.fetchPostsSuccess(transformPosts(result.data.data)));
  } else {
    yield put(PostsActions.fetchPostsFailed(result.data.message));
  }
}

export function* createPost({ tag, body }) {
  const user = yield select(getUser);
  const result = yield call(create, user.id, user.token, tag, body);

  if (result.data.success) {
    yield put(PostsActions.fetchPosts());
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
