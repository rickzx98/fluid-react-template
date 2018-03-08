import * as types from '../action/';

export default (state = { type: 'owner' }, action) => {
    switch (action.type) {
        case types.SET_SEARCH_VALUE:
            return action.payload;
        case types.SET_SEARCH_FIELD: {
            const newState = { ...state };
            const { field, value } = action.payload;
            newState[field] = value;
            return newState;
        }
        case types.CLEAR_SEARCH:
            return {};
    }
    return state;
};