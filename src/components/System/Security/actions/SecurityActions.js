import * as types from './';

import { NotificationActions as notificationActions } from '../imports';

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