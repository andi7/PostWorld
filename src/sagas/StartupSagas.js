import { put, call } from 'redux-saga/effects';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

import * as NavigationUtils from 'utils/navigation';

import StartupActions from 'models/startup';
import AuthActions from 'models/auth';
import LocationActions from 'models/location';

const getOnboardingDone = () => AsyncStorage.getItem('@onboardingDone');
const getUserToken = () => AsyncStorage.multiGet(['@token', '@user']);

// process STARTUP actions
export function* startup() {
  const onboardingDone = yield call(getOnboardingDone);

  if (onboardingDone) {
    const localData = yield call(getUserToken);
    const token = localData[0][1];
    const user = localData[1][1];

    if (token && user) {
      yield put(AuthActions.authSuccess(JSON.parse(user)));
      NavigationUtils.navigate('MainNavigator');

      yield put(LocationActions.getLocation());
    } else {
      NavigationUtils.navigate('SignUp');
    }
  }

  yield put(StartupActions.startupFinish());
  SplashScreen.hide();
}
