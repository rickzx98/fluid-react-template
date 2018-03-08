import * as Actions from './actions/RecordViewActions';

import reducer from './reducer/RecordViewReducer';

export { ConnectedRecordViewPage as RecordViewPage } from './RecordViewPage';
export { api as RecordViewApi } from './api/';
export const RecordViewReducer = reducer;
export const RecordViewActions = Actions;