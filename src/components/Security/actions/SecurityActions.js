import * as notificationActions from '../../Notification/actions/NotificationActions';
import * as types from './';

import {getApi as Api} from '../api/';
import {MPUser} from '../../../types/';

export function notAuthorizedAccess(path) {
  return (dispatch, state) => {
    dispatch(notificationActions.alertDanger(`User with role ${state().security.role} is not allowed for ${path}.`));
  };
}

export function setAuthenticatedUserInfo(userId, username, departmentId) {
  return {
    type: types.SET_AUTHENTICATED_USER,
    payload: {userId, username, departmentId}
  };
}

export function loadCurrentUser() {
  return dispatch => {
    const api = Api();
    api.getCurrentUser()
      .then(user => {
        dispatch(setAuthenticatedUserInfo(user[MPUser.USER_ID], user[MPUser.USERNAME], user[MPUser.DEPARTMENT_ID]));
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line 
        dispatch(notificationActions.alertDanger('Unauthorized Access'));
      });
  };
}
