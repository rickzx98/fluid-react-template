import '../../images/record-view-banner.jpg';

import * as actions from './actions/RecordViewActions';

import PropTypes from 'prop-types';
import React from 'react';
import { RecordViewBody } from './content/RecordViewBody';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { viewHeaders } from './content/RecordViewHeaders';

class RecordViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.thisIsControlActive = this.isControlActive.bind(this);
        this.thisRefresh = this.refresh.bind(this);
    }
    componentWillMount() {
        this.refresh();
        this.props.actions.createHeaders(viewHeaders(this.props.actions.returnToList,
            this.thisRefresh,
            this.thisIsControlActive));
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.ajax.started !== nextProps.ajax.started) {
            this.props.actions.createHeaders(viewHeaders(this.props.actions.returnToList,
                this.thisRefresh,
                this.thisIsControlActive));
        }
    }
    isControlActive() {
        return !this.props.ajax.started;
    }
    refresh() {
        const { match: { params: { itemID, itemType } } } = this.props;
        if (itemID) {
            this.props.actions.loadRecords(itemID, itemType);
        }
    }
    render() {
        return (<RecordViewBody record={this.props.record} />);
    }
}

RecordViewPage.propTypes = {
    record: PropTypes.array.isRequired,
    ajax: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    match: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        record: state.record,
        ajax: state.ajaxStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export const ConnectedRecordViewPage = connect(mapStateToProps, mapDispatchToProps)(RecordViewPage);
