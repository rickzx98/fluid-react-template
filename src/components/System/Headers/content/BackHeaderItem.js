import { FontAwesome, NavItem, PropTypes, React, browserHistory } from '../imports';

export const BackHeaderItem = ({ label, itemProperties }) => {
    const { to, confirm } = itemProperties;
    const onClick = () => {
        if (confirm) {
            const onPageLeave = confirm();
            if (onPageLeave instanceof Promise) {
                onPageLeave.then(() => {
                    reRoute();
                }).catch(() => {
                });
            } else {
                reRoute();
            }
        } else {
            reRoute();
        }
    };
    const reRoute = () => {
        if (to) {
            browserHistory.push(to);
        } else {
            browserHistory.goBack();
        }
    };

    return (<NavItem onClick={onClick}>
        <FontAwesome size="lg" name="long-arrow-left"
            fixedWidth={true} />&nbsp;{label}</NavItem>);
};

BackHeaderItem.propTypes = {
    label: PropTypes.string.isRequired,
    itemProperties: PropTypes.object.isRequired
};