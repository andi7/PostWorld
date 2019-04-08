import { put, call } from 'redux-saga/effects';

import LocationActions from 'models/location';

const getLocation = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(
      (...success) => resolve(success),
      (...err) => resolve(err),
      { enableHighAccuracy: true }
    )
  );

export function* startTracking() {
  const result = yield call(getLocation);

  console.log(result);

  if (result[0].coords) {
    yield put(LocationActions.updateLocation(result[0].coords));
  }
}

export function* stopTracking() {
  navigator.geolocation.stopObserving();
}
