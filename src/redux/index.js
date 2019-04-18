import { combineReducers } from 'redux';

import { reducer as StartupReducer } from 'models/startup';
import { reducer as AuthReducer } from 'models/auth';
import { reducer as PostsReducer } from 'models/posts';
import { reducer as CommentsReducer } from 'models/comments';
import { reducer as LocationReducer } from 'models/location';
import { reducer as MapReducer } from 'models/map';
import rootSaga from 'sagas';

import configureStore from './createStore';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  startup: StartupReducer,
  auth: AuthReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
  location: LocationReducer,
  map: MapReducer
});

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas);
      });
    });
  }

  return store;
};
