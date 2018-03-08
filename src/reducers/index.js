import { AjaxStatusReducer as ajaxStatus } from '../components/AjaxStatus/';
import { combineReducers } from 'redux';
import { DialogReducer as dialog } from '../components/Dialog/';
import { FluidFormReducer as fluidForm } from 'fluid-commons';
import { HeaderReducer as headers } from '../components/Headers/';
import { LabelsReducer as labels } from '../components/Labels/';
import { NotificationReducer as notifications } from '../components/Notification/';
import { RecordViewReducer as record } from '../components/RecordView/';
import { routerReducer } from 'react-router-redux';
import { SearchReducer as search } from '../components/Search/';
import { SearchResultReducer as searchResult } from '../components/SearchResult/';
import { SecurityReducer as security } from '../components/Security/';

const rootReducer = combineReducers({
  routing: routerReducer,
  headers, security,
  notifications, ajaxStatus,
  fluidForm, dialog, labels, search,
  searchResult, record
});
export default rootReducer;
