import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  startTracking: [],
  stopTracking: [],
  updateLocation: ['location']
});

export const LocationTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: null,
  tracking: false
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START_TRACKING]: state => ({ ...state, tracking: true }),
  [Types.STOP_TRACKING]: state => ({ ...state, tracking: false }),
  [Types.UPDATE_LOCATION]: (state, { location }) => ({ ...state, data: location })
});
