import {React, PropTypes, connect, Route, Redirect} from "../imports";

class AuthorizedRoute extends React.Component {
  render() {
    const {component: Component, ajax, security, ...rest} = this.props;
    return (
      <Route {...rest} render={() => {
        if (ajax.started) return <div>Loading...</div>;
        return (security.isAuthenticated
          ? <Component {...this.props} />
          : <Redirect to="/login"/>);
      }}/>
    );
  }
}

AuthorizedRoute.propTypes = {
  security: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired
};
const stateToProps = ({security, ajaxStatus}) => ({
  security: security,
  ajax: ajaxStatus
});

export default connect(stateToProps)(AuthorizedRoute);
