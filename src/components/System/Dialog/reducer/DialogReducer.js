import { CLOSE_DIALOG, OPEN_DIALOG } from '../actions/';

import initialState from './Initialstate';

export default function dialogReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_DIALOG:
            return action.payload;
        case CLOSE_DIALOG:
            return initialState;
        default:
            return state;
    }
}