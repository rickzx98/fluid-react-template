import * as types from '../actions/';

import initialState from './InitialState';

//import objectAssign from 'object-assign';

export default function securityReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return Object.assign({}, { ...state, isAuthenticated: true, ...action.user });
        }
        case types.SET_AUTHENTICATED_USER: {
            return { isAuthenticated: true, user: action.payload };
        }
        default:
            return state;
    }
}
