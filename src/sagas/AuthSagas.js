import { Alert } from 'react-native';
import { put, call, select } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import * as NavigationUtils from 'utils/navigation';
import { signUp, signIn, update } from 'services/auth';
import { getUser } from 'selectors/auth';

import AuthActions from 'models/auth';
import LocationActions from 'models/location';

const storeUser = user =>
  AsyncStorage.multiSet([['@token', user.token], ['@user', JSON.stringify(user)]]);

export function* signInByEmail({ email, password }) {
  const result = yield call(signIn, email, password);

  if (!result.data.success) {
    if (result.data.message === 'No user found') {
      Alert.alert('Sign in failed!', 'Email on password is incorrect!');
    }

    yield put(AuthActions.authFailure(result.data.message));
  } else {
    yield put(AuthActions.authSuccess(result.data.data));
    yield put(LocationActions.getLocation());

    storeUser(result.data.data);
    NavigationUtils.navigate('MainNavigator');
  }
}

export function* signUpByEmail({ email, password, username, avatar }) {
  const result = yield call(signUp, email, password, username, avatar);

  console.log(result);

  if (!result.data.success) {
    if (result.data.message === 'Email already exists') {
      NavigationUtils.goBack();

      Alert.alert('Sign up failed', 'This email already has an account');
    }

    yield put(AuthActions.authFailure(result.data.message));
  } else {
    yield put(AuthActions.authSuccess(result.data.data));
    yield put(LocationActions.getLocation());

    storeUser(result.data.data);
    NavigationUtils.navigate('MainNavigator');
  }
}

export function* updateUserAvatar({ avatar }) {
  const user = yield select(getUser);
  const result = yield call(update, user.id, user.token, avatar);

  console.log(result);

  if (!result.data.success) {
    yield put(AuthActions.authFailure(result.data.message));
  } else {
    yield put(AuthActions.authSuccess(result.data.data));
    storeUser(result.data.data);
  }
}
