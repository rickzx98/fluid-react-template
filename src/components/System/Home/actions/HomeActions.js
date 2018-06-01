import { PageActions } from "../imports";

export const goToUrl = url => dispatch => {
    dispatch(PageActions.goToUrl(url));
};