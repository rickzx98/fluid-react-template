import Config from './api/Config';
import { DialogPage } from '../Dialog/';
import { FluidApi } from 'fluid-commons';
import { Header } from '../Headers/';
import Interface from './api/Interface';
import { NotificationPage } from '../Notification/';
import PropTypes from 'prop-types';
import React from 'react';
import RouteBlocker from './RouteBlocker';
import { Search } from '../Search/';
import { connect } from 'react-redux';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
const environment = process.env.NODE_ENV || 'development';
class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.security;
    return (
      <FluidApi
        config={Config}
        api={Interface}
        environment={environment}>
        {isAuthenticated && <Header {...this.props} navComponents={<Search/>} />}
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
