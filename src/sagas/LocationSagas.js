import { put, call } from 'redux-saga/effects';

import LocationActions from 'models/location';

import { getLocationRequest } from 'utils/geolocation';

export function* getLocation() {
  const result = yield call(getLocationRequest);

  console.log(result);

  if (result[0].coords) {
    yield put(LocationActions.updateLocationSuccess(result[0].coords));
  } else {
    yield put(LocationActions.updateLocationFailure());
  }
}

export function* startTracking() {
  const result = yield call(getLocationRequest);

  console.log(result);

  if (result[0].coords) {
    yield put(LocationActions.updateLocationSuccess(result[0].coords));
  }
}

export function* stopTracking() {
  navigator.geolocation.stopObserving();
}
