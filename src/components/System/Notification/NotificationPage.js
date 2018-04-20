import * as actions from './actions/NotificationActions';

import { AlertList, PropTypes, React, bindActionCreators, connect } from './imports';

export class NotificationPage extends React.Component {
    constructor(props) {
        super(props);
        this.alertDismiss = this.onDismiss.bind(this);
    }
    onDismiss(alert) {
        this.props.actions.removeAlert(alert.id);
    }
    render() {
        return (<AlertList timeout={700} dismissTitle="close" onDismiss={this.alertDismiss} alerts={this.props.notifications} />);
    }
}

NotificationPage.propTypes = {
    notifications: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        notifications: state.notifications
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export const ConnectedNotificationPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationPage);

NotificationPage.defaultProps = {
    access: []
};
