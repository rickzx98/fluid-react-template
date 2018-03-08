import * as types from './';

import { FluidApi, FluidTable } from 'fluid-commons';

import { Pages } from '../../../types/';
import { TABLE_NAME } from '../constants';
import { AjaxStatusActions as ajaxStatusActions } from '../../AjaxStatus/';
import { getLabel } from '../../../utils/';
import { HeaderActions as headerActions } from '../../Headers/';
import { NotificationActions as notificationActions } from '../../Notification/';
import { push } from 'react-router-redux';

export function setResults(results) {
  return {
    type: types.SET_RESULTS,
    payload: results
  };
}

export function loadResults() {
  return (dispatch, state) => {
    const { search: { type, text } } = state();
    dispatch(ajaxStatusActions.beginAjaxCall());
    FluidApi.execute('findRecords', {
      type, text
    }).then(({ findRecords }) => {
      const result = findRecords();
      dispatch(setResults(result.values ? result.values() : []));
      dispatch(ajaxStatusActions.ajaxCallSuccess());
    }).catch(error => {
      dispatch(ajaxStatusActions.ajaxCallError(error));
      dispatch(notificationActions.alertDanger(getLabel('LABEL_FAILED_LOADING_RECORDS')));
    });
  };
}

export function clear() {
  return {
    type: types.CLEAR
  };
}


export function clearFilter() {
  FluidTable.clearFilter(TABLE_NAME);
}


export function createHeaders(isActive) {
  return dispatch => {
    const headers = {};
    headers['clearFilter'] = {
      label: getLabel('LABEL_CLEAR_FILTER'),
      fontIcon: 'eraser',
      onClick: clearFilter,
      isActive: isActive
    };
    headers['refresh'] = {
      label: getLabel('LABEL_REFRESH'),
      fontIcon: 'refresh',
      onClick: () => {
        dispatch(loadResults());
      },
      isActive: isActive
    };
    dispatch(headerActions.setHeaderControls(headers));
  };
}

export function openView(itemType, itemID) {
  return dispatch => {
    dispatch(push(Pages.recordViewPageWitdItemIDAndType(itemID, itemType)));
  };
}