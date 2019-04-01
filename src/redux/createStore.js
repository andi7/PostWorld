import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Logger Middleware ------------- */

  const logger = store => next => action => {
    const returnValue = next(action);

    if (console.group) {
      console.group(action.type);
      console.log('%c action', 'color: #03A9F4', action);
      console.log('%c newState', 'color: #03A9F4', store.getState());
      console.groupEnd();
    }

    return returnValue;
  };
  middleware.push(logger);

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware
  };
};
