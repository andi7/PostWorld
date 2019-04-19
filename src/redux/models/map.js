import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  openMap: ['mapType'],
  closeMap: [],
  setMapType: ['mapType']
});

export const MapTypes = Types;
export default Creators;

const INITIAL_STATE = {
  mapType: true,
  isActive: null
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_MAP]: (state, { mapType }) => ({ ...state, isActive: true, mapType }),
  [Types.CLOSE_MAP]: state => ({ ...state, isActive: false }),
  [Types.SET_MAP_TYPE]: (state, { mapType }) => ({ ...state, mapType })
});
