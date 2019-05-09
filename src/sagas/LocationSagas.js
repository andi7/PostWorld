import { put, call } from 'redux-saga/effects';

import LocationActions from 'models/location';

const getLocationRequest = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(
      (...success) => resolve(success),
      (...err) => resolve(err),
      { enableHighAccuracy: true }
    )
  );

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
