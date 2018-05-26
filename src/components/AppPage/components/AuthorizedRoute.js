import { LoginPage, PropTypes, React, Route, connect } from "../imports";

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, security, ...rest } = this.props;
    return (
      <Route {...rest} render={({ match }) => {
        return (security.isAuthenticated
          ? <Component {...this.props} match={match} />
          : <LoginPage {...this.props} match={match} />);
      }} />
    );
  }
}

AuthorizedRoute.propTypes = {
  security: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired
};
const stateToProps = ({ security }) => ({
  security: security
});

export default connect(stateToProps)(AuthorizedRoute);
