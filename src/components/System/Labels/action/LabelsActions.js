import * as types from './';

export const setLocale = (locale) => {
    return {
        type: types.SET_LOCALE,
        payload: locale
    };
};