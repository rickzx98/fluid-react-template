import '../../images/app-icon.png';

import { HeadersBody } from './content/HeadersBody';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<HeadersBody {...this.props} />);
  }
}


Header.propTypes = {
  locale: PropTypes.string.isRequired,
  appLabel: PropTypes.string.isRequired,
  security: PropTypes.object.isRequired,
  headers: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appLabel: state.labels.appLabel,
    locale: state.labels.locale,
    ajax: state.ajaxStatus,
    headers: state.headers,
    routing: state.routing,
    security: state.security
  };
}


export const ConnectedHeader = connect(mapStateToProps)(Header);
