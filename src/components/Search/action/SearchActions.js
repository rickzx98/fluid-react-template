import * as types from './';

import { Pages } from '../../../types/';
import { push } from 'react-router-redux';
import { SearchResultActions as searchResultActions } from '../../SearchResult/';

export const setSearchField = (field, value) => {
  return {
    type: types.SET_SEARCH_FIELD,
    payload: { field, value }
  };
};
export const setSearchValue = (type, text) => {
  return {
    type: types.SET_SEARCH_VALUE,
    payload: { type, text }
  };
};

export const submitSearch = () => {
  return (dispatch, state) => {
    const { routing: { location: { pathname } } } = state();
    if (pathname && pathname !== Pages.recordHomePage) {
      dispatch(push(Pages.recordHomePage));
    }
    dispatch(searchResultActions.loadResults());
  };
};

export const clearSearch = () => {
  return {
    type: types.CLEAR_SEARCH
  };
};
