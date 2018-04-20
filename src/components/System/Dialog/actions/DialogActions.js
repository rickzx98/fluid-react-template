import * as types from './';

import { CancelDialog } from '../types/CancelDialog';
import { DeleteDialog } from '../types/DeleteDialog';

export function openDialog(dialog) {
  dialog.show = true;
  return {
    type: types.OPEN_DIALOG,
    payload: dialog
  };
}
export function closeDialog() {
  return {
    type: types.CLOSE_DIALOG
  };
}

export function openCancelConfirmation(confirm, cancel) {
  return dispatch => {
    dispatch(openDialog(CancelDialog(() => {
      if (confirm instanceof Promise) {
        confirm.then(() => {
          dispatch(closeDialog());
        });
      } else {
        confirm();
        dispatch(closeDialog());
      }
    }, () => {
      if (cancel) {
        if (cancel instanceof Promise) {
          cancel.then(() => {
            dispatch(closeDialog());
          });
        } else {
          cancel();
          dispatch(closeDialog());
        }
      } else {
        dispatch(closeDialog());
      }
    })));
  };
}

export function openDeleteConfirmation(confirm, cancel, target) {
  return dispatch => {
    dispatch(openDialog(DeleteDialog(() => {
      if (confirm instanceof Promise) {
        confirm.then(() => {
          dispatch(closeDialog());
        });
      } else {
        confirm();
        dispatch(closeDialog());
      }
    }, () => {
      if (cancel) {
        if (cancel instanceof Promise) {
          cancel.then(() => {
            dispatch(closeDialog());
          });
        } else {
          cancel();
          dispatch(closeDialog());
        }
      } else {
        dispatch(closeDialog());
      }
    }, target)));
  };
}
