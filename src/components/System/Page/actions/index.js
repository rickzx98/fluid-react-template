import * as types from './types';

import {
  AjaxStatusActions,
  DialogActions,
  FluidApi,
  FluidForm,
  HeaderActions,
  NotificationActions,
  UrlPattern,
  getLabel,
  getRequireMessage,
  goBack,
  push
} from '../imports';

export const onFailed = (stack, formName) => {
  return dispatch => {
    const { message, field } = getRequireMessage(stack.error.message);
    FluidForm.invalid(formName, field, message);
    dispatch(NotificationActions.alertDanger(message));
  };
};
export const back = () => dispatch => {
  dispatch(goBack());
};
export const prevPage = (currentForm) => {
  return (dispatch, state) => {
    const { fluidForm } = state();
    const form = fluidForm[currentForm];
    if (form.touched) {
      dispatch(DialogActions.openCancelConfirmation(() => {
        dispatch(goBack());
      }, () => {
        dispatch(DialogActions.closeDialog());
      }));
    } else {
      dispatch(goBack());
    }
  };
};

export const add = pageName => dispatch => {
  dispatch(push(`${pageName}/new`));
};
export const view = (pageName, id) => dispatch => {
  dispatch(push(`${pageName}/view/${id}`));
};
export const load = (pageName, parent, transformer) => dispatch => {
  dispatch(AjaxStatusActions.beginAjaxCall());
  FluidApi.execute('getListData', { pageName })
    .then(({ getListData }) => {
      const data = getListData('data')()[pageName];
      if (transformer) {
        if (transformer instanceof Promise) {
          transformer.then(transformedData => {
            dispatch(setListData(pageName, transformedData));
            dispatch(AjaxStatusActions.ajaxCallSuccess());
          }).catch(error => {
            dispatch(AjaxStatusActions.ajaxCallError(error));
            dispatch(NotificationActions.alertDanger(getLabel(`LABEL_LOADING_${pageName}_LIST_FAILED`)));
          });
        } else {
          dispatch(setListData(pageName, transformer(data)));
          dispatch(AjaxStatusActions.ajaxCallSuccess());
        }
      } else {
        dispatch(setListData(pageName, data));
        dispatch(AjaxStatusActions.ajaxCallSuccess());
      }

    })
    .catch(error => {
      dispatch(AjaxStatusActions.ajaxCallError(error));
      dispatch(NotificationActions.alertDanger(getLabel(`LABEL_LOADING_${pageName}_LIST_FAILED`)));
    });
};

export const create = (pageName, input) => dispatch => {
  dispatch(AjaxStatusActions.beginAjaxCall());
  FluidApi.execute('createData', { input, pageName })
    .then(({ createData }) => {
      const data = createData('data')();
      dispatch(addData(data));
      dispatch(NotificationActions.alertSuccess(getLabel(`LABEL_CREATE_${pageName}_SUCCESS`)));
      dispatch(AjaxStatusActions.ajaxCallSuccess());
      dispatch(prevPage(pageName));
    })
    .catch(error => {
      dispatch(AjaxStatusActions.ajaxCallError(error));
      dispatch(NotificationActions.alertDanger(getLabel(`LABEL_FAILED_TO_CREATE_${pageName}`)));
    });
};
export const update = (pageName, id, input) => dispatch => {
  const { _id, primaryField } = idSplitter(id);
  dispatch(AjaxStatusActions.beginAjaxCall());
  FluidApi.execute('updateData', { input, pageName, id: _id, primaryField })
    .then(() => {
      dispatch(NotificationActions.alertSuccess(getLabel(`LABEL_UPDATE_${pageName}_SUCCESS`)));
      dispatch(AjaxStatusActions.ajaxCallSuccess());
      dispatch(prevPage(pageName));
    })
    .catch(error => {
      dispatch(AjaxStatusActions.ajaxCallError(error));
      dispatch(NotificationActions.alertDanger(getLabel(`LABEL_FAILED_TO_UPDATE_${pageName}`)));
    });
};
export const loadById = (pageName, id) => dispatch => {
  const { _id, primaryField } = idSplitter(id);
  dispatch(AjaxStatusActions.beginAjaxCall());
  FluidApi.execute('getDataById', { pageName, id: _id, primaryField })
    .then(({ getDataById }) => {
      const data = getDataById('data')();
      FluidForm.load(pageName, data);
      dispatch(AjaxStatusActions.ajaxCallSuccess());
    })
    .catch(error => {
      dispatch(AjaxStatusActions.ajaxCallError(error));
      dispatch(NotificationActions.alertDanger(getLabel(`LABEL_LOADING_${pageName}_FAILED`)));
    });
};

export const removeData = (pageName, id) => dispatch => {
  const { _id, primaryField } = idSplitter(id);
  dispatch(AjaxStatusActions.beginAjaxCall());
  FluidApi.execute('deleteData', { pageName, id: _id, primaryField })
    .then(() => {
      dispatch(NotificationActions.alertSuccess(getLabel(`LABEL_DELETE_${pageName}_SUCCESS`)));
      dispatch(AjaxStatusActions.ajaxCallSuccess());
      dispatch(prevPage(pageName));
    })
    .catch(error => {
      dispatch(AjaxStatusActions.ajaxCallError(error));
      dispatch(NotificationActions.alertDanger(getLabel(`LABEL_FAILED_TO_DELETE_${pageName}`)));
    });
};
export function goTo(routes, data, parent) {
  const urlPattern = new UrlPattern(routes.view);
  return dispatch => {
    dispatch(push(urlPattern.stringify({
      id: `${data.getPrimaryField()}_f${data.getPrimaryKey()}`,
      parent: parent || ''
    })));
  };
}
export const setListData = (pageName, listData) => ({
  type: types.SET_LIST_DATA,
  pageName,
  payload: listData
});

export const addData = (pageName, data) => ({
  type: types.ADD_DATA,
  payload: data
});

export function createHeaders(controls) {
  return dispatch => {
    dispatch(HeaderActions.setHeaderControls(controls));
  };
}


export function goToNew(routes, parent) {
  const urlPattern = new UrlPattern(routes.create);
  return dispatch => {
    dispatch(push(urlPattern.stringify({
      parent: parent || ''
    })));
  };
}


export const cancelChanges = (pageName, id, cancel) => {
  return (dispatch, state) => {
    const { fluidForm } = state();
    const form = fluidForm[pageName];
    if (form.touched) {
      dispatch(DialogActions.openCancelConfirmation(() => {
        dispatch(cancelConfirm(pageName, id));
        cancel();
      }, () => {
        dispatch(DialogActions.closeDialog());
      }));
    } else {
      cancel();
    }
  };
};

export const cancelConfirm = (pageName, id) => {
  return dispatch => {
    dispatch(loadById(pageName, id));
    dispatch(DialogActions.closeDialog());
  };
};

export const deleteData = (pageName, id) => {
  return dispatch => {
    dispatch(DialogActions.openDeleteConfirmation(() => {
      dispatch(removeData(pageName, id));
      dispatch(DialogActions.closeDialog());
    }, undefined, getLabel('LABEL_THIS_RECORD')));
  };
};

export const goToPage = (id, module) => dispatch => {
  const pattern = new UrlPattern(module.pages.list);
  dispatch(push(pattern.stringify({ parent: id })));
};

export const goToUrl = (url) => dispatch => {
  dispatch(push(url));
};

function idSplitter(id) {
  const splitted = id.split('_f');
  const primaryField = splitted[0];
  const _id = splitted[1];
  return {
    _id, primaryField
  };
}
