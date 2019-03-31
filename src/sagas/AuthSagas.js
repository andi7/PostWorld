import { Alert } from 'react-native';
import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import * as NavigationUtils from 'utils/navigation';
import { signUp, signIn } from 'services/auth';

import AuthActions from 'models/auth';

const storeUser = user => AsyncStorage.setItem('@token', user.token);

export function* signInByEmail({ email, password }) {
  const result = yield call(signIn, email, password);

  console.log(result);
}

export function* signUpByEmail({ email, password, username, avatar }) {
  const result = yield call(signUp, email, password, username);

  if (!result.data.success) {
    if (result.data.message === 'Email already exists') {
      NavigationUtils.goBack();

      Alert.alert('Sign up failed', 'This email already has an account');
    } else {
      yield put(AuthActions.authFailure(result.data.message));
    }
  } else {
    yield put(AuthActions.authSuccess(result.data.data));
    storeUser(result.data.data);
    NavigationUtils.navigate('MainNavigator');
  }
}
