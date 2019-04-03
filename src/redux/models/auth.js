import { createActions, createReducer } from 'reduxsauce';
import AsyncStorage from '@react-native-community/async-storage';

import * as NavigationUtils from 'utils/navigation';

const { Types, Creators } = createActions({
  signInByEmail: ['email', 'password'],
  signUpByEmail: ['email', 'password', 'username', 'avatar'],
  authSuccess: ['user'],
  authFailure: ['error'],
  logOut: []
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null
};

const logOut = () => {
  NavigationUtils.navigate('AuthNavigator');
  AsyncStorage.multiSet([['@token', ''], ['@user', '']]);

  return INITIAL_STATE;
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_BY_EMAIL]: state => ({ ...state, loading: true }),
  [Types.SIGN_UP_BY_EMAIL]: state => ({ ...state, loading: true }),
  [Types.AUTH_SUCCESS]: (state, { user }) => ({ ...state, user, loading: false }),
  [Types.AUTH_FAILURE]: (state, { error }) => ({ ...state, error, loading: false }),
  [Types.LOG_OUT]: logOut
});
