import { HeaderActions, PageActions } from "../imports";

export const goToUrl = url => dispatch => {
    dispatch(PageActions.goToUrl(url));
};

export const resetHeaders = () => dispatch => {
    dispatch(HeaderActions.setHeaderControls({}));
};