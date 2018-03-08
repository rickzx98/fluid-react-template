import * as types from '../action/';
export default (state = [], action) => {
  switch (action.type) {
    case types.SET_RESULTS:
      return [...action.payload];
    default:
      return state;
  }
};
