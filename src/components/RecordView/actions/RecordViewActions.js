import * as types from './';

import { AjaxStatusActions } from '../../AjaxStatus/';
import { FluidApi } from 'fluid-commons';
import { HeaderActions } from '../../Headers/';
import { NotificationActions } from '../../Notification/';
import {getLabel} from '../../../utils/';
import { goBack } from 'react-router-redux';

export const loadRecords = (itemID, itemType) => {
    return dispatch => {
        dispatch(AjaxStatusActions.beginAjaxCall());
        FluidApi.execute('findByItemIDAndType', { itemID, itemType })
            .then(({ findByItemIDAndType }) => {
                if (findByItemIDAndType().result) {
                    dispatch(setRecords(findByItemIDAndType().result()));
                } else {
                    dispatch(setRecords([]));
                }
                dispatch(AjaxStatusActions.ajaxCallSuccess());
            })
            .catch((error) => {
                console.error(error); // eslint-disable-line 
                dispatch(AjaxStatusActions.ajaxCallError(error));
                dispatch(NotificationActions.alertDanger(getLabel('LABEL_FAILED_LOADING_RECORDS')));
            });
    };
};

export const setRecords = (records) => {
    return {
        type: types.SET_RECORDS,
        payload: records
    };
};

export const returnToList = () => {
    return dispatch => {
        dispatch(goBack());
    };
};

export const createHeaders = (headers) => {
    return dispatch => {
        dispatch(HeaderActions.setHeaderControls(headers));
    };
};