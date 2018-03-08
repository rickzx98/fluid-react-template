import { AJAX_CALL_ERROR, AJAX_CALL_SUCESS, BEGIN_AJAX_CALL } from '../actions/';

import initialState from './InitialState';

export default (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_AJAX_CALL: {
            const newState = { ...state, started: true };
            return newState;
        }
        case AJAX_CALL_ERROR:
        case AJAX_CALL_SUCESS:
            {
                const newState = { ...state, started: false, done: true };
                return newState;
            }
        default:
            return state;
    }
};
