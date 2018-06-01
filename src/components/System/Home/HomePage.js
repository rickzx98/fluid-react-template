import * as actions from "./actions/HomeActions";

import { CreatePage, CreateReduxPage, PropTypes } from "./imports";

import Instance from "./Instance";

export const HomePage = CreateReduxPage(CreatePage(Instance, {
    actions: PropTypes.object.isRequired
}), ({ routing, ajaxStatus }) => ({
    routing,
    ajax: ajaxStatus
}), { actions });
