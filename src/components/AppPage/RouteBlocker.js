import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Pages } from '../../types/';
import PropTypes from 'prop-types';
import { RecordHomePage } from '../RecordHome/';
import { RecordViewPage } from '../RecordView/';

export default class RouteBlocker extends PureComponent {
  render() {
    return (<Switch>
      <Route exact path={Pages.recordHomePage} component={RecordHomePage} />
      <Route exact path={Pages.recordViewPage + ':itemType/:itemID'} component={RecordViewPage} />
    </Switch>);
  }
}

RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
