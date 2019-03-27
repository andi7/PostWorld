import { combineReducers } from 'redux';

import configureStore from './createStore';
import rootSaga from '../sagas';

import { reducer as PostsReducer } from './PostsRedux';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({ posts: PostsReducer });

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
