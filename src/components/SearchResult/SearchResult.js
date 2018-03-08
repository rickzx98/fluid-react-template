import * as actions from './action//SearchResultActions';

import PropTypes from 'prop-types';
import React from 'react';
import { SearchResultBody } from './content/SearchResultBody';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.thisOnSelect = this.onSelect.bind(this);
    this.thisIsControlActive = this.isControlActive.bind(this);
  }
  componentWillMount() {
    this.props.actions.createHeaders(this.thisIsControlActive);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.ajax.started !== nextProps.ajax.started) {
      this.props.actions.createHeaders(this.thisIsControlActive);
    }
  }
  isControlActive() {
    return !this.props.ajax.started && this.props.searchResult.length > 0;
  }
  onSelect({ item, itemType }) {
    this.props.actions.openView(itemType, item.itemID);
  }
  render() {
    return (<SearchResultBody onSelect={this.thisOnSelect} records={this.props.searchResult} />);
  }
}
SearchResult.propTypes = {
  searchResult: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    ajax: state.ajaxStatus,
    searchResult: state.searchResult
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export const ConnectedSearchResult = connect(mapStateToProps, mapDispatchToProps)(SearchResult);
