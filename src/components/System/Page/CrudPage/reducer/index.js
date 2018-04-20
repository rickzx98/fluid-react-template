import * as types from '../../actions/types';

import initialState from './InitialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LIST_DATA:
      {
        const newState = { ...initialState };
        newState[action.pageName] = action.payload;
        return newState;
      }
    default:
      return state;
  }
};
