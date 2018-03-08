import Modal from 'react-bootstrap/lib/Modal';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class DialogPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<Modal
            onEnter={this.props.dialog.onEnter}
            onEntered={this.props.dialog.onEntered}
            onEntering={this.props.dialog.onEntering}
            onExit={this.props.dialog.onExit}
            onExited={this.props.dialog.onExited}
            onExiting={this.props.dialog.onExiting}
            onHide={this.props.dialog.onHide}
            show={this.props.dialog.show}
            dialogClassName="app-modal">
            <Modal.Header onHide={this.props.dialog.onHide} closeButton={this.props.dialog.showCloseButton}>
                <Modal.Title>{this.props.dialog.title}</Modal.Title>
                <Modal.Body>
                    {this.props.dialog.body}
                </Modal.Body>
                <Modal.Footer>
                    {this.props.dialog.footer}
                </Modal.Footer>
            </Modal.Header>
        </Modal>);
    }
}

DialogPage.propTypes = {
    dialog: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        dialog: state.dialog
    };
}

export const ConnectedDialogPage = connect(mapStateToProps)(DialogPage);