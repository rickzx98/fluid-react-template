import { PropTypes, PureComponent, React, Route, Switch, routes } from './imports';

export default class RouteBlocker extends PureComponent {
  constructor(props) {
    super(props);
    this.routeElements = [];
    if (routes) {
      routes.forEach((module, index) => {
        module.pages.forEach(page => {
          this.routeElements.push(<Route
            exact
            key={`page_${index}`}
            path={page.path}
            component={page.component} />);
        });
      });
    }
  }
  render() {

    return (<Switch>
      {this.routeElements || ""}
    </Switch>);
  }
}


RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
