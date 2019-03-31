import { put, call } from 'redux-saga/effects';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

import * as NavigationUtils from 'utils/navigation';

import StartupActions from 'models/startup';

const getOnboardingDone = () => AsyncStorage.getItem('@onboardingDone');
const getUserToken = () => AsyncStorage.getItem('@token');

// process STARTUP actions
export function* startup() {
  const onboardingDone = yield call(getOnboardingDone);

  if (onboardingDone) {
    const hasToken = yield call(getUserToken);

    console.log(hasToken);

    NavigationUtils.navigate('SignUp');
  }

  yield put(StartupActions.startupFinish());
  SplashScreen.hide();
}
