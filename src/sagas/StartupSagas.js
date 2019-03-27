import { put, call } from 'redux-saga/effects';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

import * as NavigationUtils from 'utils/navigation';

import StartupActions from '../redux/StartupRedux';

const getOnboardingDone = () => AsyncStorage.getItem('@onboardingDone');

// process STARTUP actions
export function* startup() {
  const onboardingDone = yield call(getOnboardingDone);

  if (onboardingDone) {
    NavigationUtils.navigate('SignUp');
  }

  yield put(StartupActions.startupFinish());
  SplashScreen.hide();
}
