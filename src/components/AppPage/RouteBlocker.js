import { PropTypes, PureComponent, React, Switch, routes } from './imports';

import { PageRoutes } from "./components/PageRoutes";

export default class RouteBlocker extends PureComponent {
  render() {
    return (<Switch>
      {routes && routes.map(route => <PageRoutes key={route.name} crudPages={route.pages} />)}
    </Switch>);
  }
}


RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
