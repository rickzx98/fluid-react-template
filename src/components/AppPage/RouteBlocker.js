import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AdminUserPage } from '../Admin/AdminUser/';
import { HomePage } from '../System/Home/';
import { Pages } from '../../types/';
import PropTypes from 'prop-types';

export default class RouteBlocker extends PureComponent {
  render() {
    return (<Switch>
      <Route exact path={Pages.home} component={HomePage}/>
      <Route exact path={Pages.user} component={AdminUserPage}/>
    </Switch>);
  }
}


RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
