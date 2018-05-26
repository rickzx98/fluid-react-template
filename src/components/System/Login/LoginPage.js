import * as actions from "./actions/LoginActions";

import { CreatePage, CreateReduxPage, PropTypes } from "./imports";

import Instance from "./instance";
import { PAGE_NAME } from "./constants";

export const LoginPage = CreateReduxPage(CreatePage(Instance, {
    pageForm: PropTypes.object.isRequired,
    routing: PropTypes.object.isRequired,
    ajax: PropTypes.object.isRequired
}), ({ fluidForm, routing, ajaxStatus }) => ({
    pageForm: fluidForm[PAGE_NAME] || { data: {} },
    routing,
    ajax: ajaxStatus
}), { actions });