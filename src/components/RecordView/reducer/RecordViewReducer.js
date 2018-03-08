import * as types from '../actions/';

export default (state = [], action) => {
    switch (action.type) {
        case types.SET_RECORDS:
            return action.payload;
        default:
            return state;
    }
};