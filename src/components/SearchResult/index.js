import * as Actions from './action/SearchResultActions';

import reducer from './reducer/SearchResultReducer';

export const SearchResultActions = Actions;
export { api as SearchResultApi } from './api/';
export const SearchResultReducer = reducer;
export { ConnectedSearchResult as SearchResult } from './SearchResult';
export { RecordColumns } from './api';