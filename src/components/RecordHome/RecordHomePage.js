import '../../images/home-banner.jpg';

import React, { Component } from 'react';

import { RecordHomeBody } from './content/RecordHomeBody';
import { connect } from 'react-redux';

class RecordHomePage extends Component {
  render() {
    return <RecordHomeBody />;
  }
}

RecordHomePage.propTypes = {};


export const ConnectedRecordHomePage = connect()(RecordHomePage);
