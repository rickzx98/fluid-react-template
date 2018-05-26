import {PropTypes, PureComponent, React, Switch, routes, HomePage} from './imports';
import AuthorizedRoute from "./components/AuthorizedRoute";

export default class RouteBlocker extends PureComponent {
  constructor(props) {
    super(props);
    this.routeElements = [];
    if (routes) {
      routes.forEach((module, index) => {
        module.pages.forEach(page => {
          this.routeElements.push(<AuthorizedRoute
            exact
            key={`page_${index}`}
            path={page.path}
            component={page.component}/>);
        });
      });
    }
  }

  render() {

    return (<Switch>
      <AuthorizedRoute exact path="/" component={HomePage}/>
      {this.routeElements || ""}
    </Switch>);
  }
}


RouteBlocker.propTypes = {
  routing: PropTypes.object.isRequired
};
