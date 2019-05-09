import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  getLocation: [],
  startTracking: [],
  stopTracking: [],
  updateLocationSuccess: ['location'],
  updateLocationFailure: ['location']
});

export const LocationTypes = Types;
export default Creators;

const INITIAL_STATE = {
  loading: false,
  data: null,
  tracking: false
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LOCATION]: state => ({ ...state, loading: true }),
  [Types.START_TRACKING]: state => ({ ...state, tracking: true }),
  [Types.STOP_TRACKING]: state => ({ ...state, tracking: false }),
  [Types.UPDATE_LOCATION_SUCCESS]: (state, { location }) => ({ ...state, data: location }),
  [Types.UPDATE_LOCATION_FAILURE]: state => ({ ...state, loading: false })
});
