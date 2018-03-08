import * as types from './';

export function alertInfo(message) {
  return {
    type: types.ALERT_INFO,
    message
  };
}

export function alertDanger(message) {
  return { 
    type: types.ALERT_DANGER,
    message
  };
}

export function alertWarning(message) {
  return {
    type: types.ALERT_WARNING,
    message
  };
}

export function alertSuccess(message) {
  return {
    type: types.ALERT_SUCCESS,
    message
  };
}

export function removeAlert(id) {
  return {
    type: types.REMOVE_ALERT,
    id
  };
}
