import * as actions from '../actions/';

import { CreatePage, CreateReduxPage } from '../../Page/';

import instance from './instance/instance';
import pages from './pages';
import propTypes from './propTypes';

export const CrudPage = ({
  pageName, FormSpecs,
  TableColumns, formProps, types,
  page, listTransformer, overrideRoutes, links,
  fieldKey, overridePages, tabbed, pageLinks,
  overrideHeaders, screens
}, commands) => {
  const routes = pages(pageName, overrideRoutes);
  return CreateReduxPage(CreatePage(instance({
    pageName,
    FormSpecs,
    TableColumns,
    page,
    formProps,
    listTransformer,
    routes,
    links,
    fieldKey,
    overridePages,
    tabbed,
    pageLinks,
    commands,
    headerControls: overrideHeaders,
    screens
  }), propTypes(types), routes),
    ({ fluidForm, pageListData, routing, ajaxStatus }) => ({
      pageForm: fluidForm[pageName] || { data: {} },
      pageList: pageListData[pageName] || [],
      routing,
      ajax: ajaxStatus
    }), { actions });
};
