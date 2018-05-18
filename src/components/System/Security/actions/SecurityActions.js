import * as types from './';

import { User, NotificationActions as notificationActions } from '../imports';

import { getApi as Api } from '../api/';

export function notAuthorizedAccess(path) {
  return (dispatch, state) => {
    dispatch(notificationActions.alertDanger(`User with role ${state().security.role} is not allowed for ${path}.`));
  };
}

export function setAuthenticatedUserInfo(userId, username) {
  return {
    type: types.SET_AUTHENTICATED_USER,
    payload: { userId, username }
  };
}

export function loadCurrentUser() {
  return dispatch => {
    const api = Api();
    api.getCurrentUser()
      .then(user => {
        dispatch(setAuthenticatedUserInfo(user[User.ID], user[User.USERNAME]));
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line 
        dispatch(notificationActions.alertDanger('Unauthorized Access'));
      });
  };
}