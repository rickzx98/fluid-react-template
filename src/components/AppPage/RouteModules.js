import { Route, Switch } from 'react-router-dom';

import React from 'react';

export const RouteModules = (modules) => () => {
  return modules.map(module => {
    return (<Switch key={module.name}>
      <Route exact path={module.pages.list} component={module.component} />
      <Route exact path={module.pages.view} component={module.component} />
      <Route exact path={module.pages.create} component={module.component} />
      {module.modules && module.modules.length > 0 && RouteModules(module.modules)()}
    </Switch>);
  });
};
