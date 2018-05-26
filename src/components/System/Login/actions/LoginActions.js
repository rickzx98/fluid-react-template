import { AjaxStatusActions, FluidApi, NotificationActions, SecurityActions, User, getLabel } from "../imports";

import { PAGE_USER } from "../constants";

export const login = (login) => dispatch => {
    dispatch(AjaxStatusActions.beginAjaxCall());
    FluidApi.execute("loginCredentials", {
        login,
        pageName: PAGE_USER
    }).then(({ loginCredentials }) => {
        const user = loginCredentials("data")();
        dispatch(AjaxStatusActions.ajaxCallSuccess());
        dispatch(SecurityActions.setAuthenticatedUserInfo(user[User._ID], user[User.USERNAME]));
    }).catch((error) => {
        dispatch(NotificationActions.alertDanger(getLabel("LABEL_INVALID_USERNAME_OR_PASSWORD")));
        dispatch(AjaxStatusActions.ajaxCallError(error));
    });
};