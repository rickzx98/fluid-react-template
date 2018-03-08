import * as actions from './action/SearchActions';

import PropTypes from 'prop-types';
import React from 'react';
import { SearchBody } from './content/SearchBody';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.thisOnChange = this.onChange.bind(this);
    this.thisOnSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.props.actions.setSearchField(event.target.name, event.target.value);
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.actions.submitSearch();
  }
  render() {
    return (<SearchBody
      onSubmit={this.thisOnSubmit}
      onChange={this.thisOnChange}
      ajax={this.props.ajax}
      search={this.props.search} />);
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    ajax: state.ajaxStatus
  };
}

function mapDispatchToActions(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


Search.propTypes = {
  search: PropTypes.object,
  ajax: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export const ConnectedSearch = connect(mapStateToProps, mapDispatchToActions)(Search);
