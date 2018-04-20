import { DialogPage, FluidApi, Header, NotificationPage, PropTypes, React, connect } from './imports';

import Config from './api/Config';
import Interface from './api/Interface';
import { NavComponents } from './NavComponents';
import RouteBlocker from './RouteBlocker';

const environment = process.env.NODE_ENV || 'development';
class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.security;
    return (
      <FluidApi
        config={Config}
        api={Interface}
        environment={environment}>
        {isAuthenticated && <Header {...this.props} navComponents={NavComponents} />}
        <NotificationPage />
        <DialogPage />
        {isAuthenticated && <RouteBlocker routing={this.props.routing} />}
      </FluidApi>
    );
  }
}

App.propTypes = {
  security: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  fluidForm: PropTypes.object
};

function mapStateToProps(state) {
  return {
    security: state.security,
    routing: state.routing,
    fluidForm: state.fluidForm
  };
}

export const ConnectApp = connect(mapStateToProps)(App);
