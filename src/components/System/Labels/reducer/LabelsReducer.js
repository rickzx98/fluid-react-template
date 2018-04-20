import * as types from '../action/';

export default (state = { locale: 'en', appLabel: 'main' }, action) => {
    switch (action.type) {
        case types.SET_LOCALE:
            return { ...state, locale: action.payload };
        default:
            return state;
    }
};