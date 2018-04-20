import { AjaxStatusReducer as ajaxStatus } from '../components/System/AjaxStatus/';
import { combineReducers } from 'redux';
import { DialogReducer as dialog } from '../components/System/Dialog/';
import { FluidFormReducer as fluidForm } from 'fluid-commons';
import { HeaderReducer as headers } from '../components/System/Headers/';
import { LabelsReducer as labels } from '../components/System/Labels/';
import { NotificationReducer as notifications } from '../components/System/Notification/';
import { CrudPageReducer as pageListData } from '../components/System/Page/';
import { routerReducer } from 'react-router-redux';
import { SecurityReducer as security } from '../components/System/Security/';
const rootReducer = combineReducers({
  routing: routerReducer,
  headers, security,
  notifications, ajaxStatus,
  fluidForm, dialog, labels,
  pageListData
});
export default rootReducer;
