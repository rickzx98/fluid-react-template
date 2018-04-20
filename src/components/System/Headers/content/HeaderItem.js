import { FontAwesome, NavItem, PropTypes, React } from '../imports';

import { BackHeaderItem } from './BackHeaderItem';

export const HeaderItem = ({ itemProperties, field }) => {
    if (field === 'Back') {
        return <BackHeaderItem itemProperties={itemProperties} label={itemProperties.label || field} />;
    }
    return (<NavItem disabled={!itemProperties.isActive || (itemProperties.isActive && !itemProperties.isActive())} onClick={itemProperties.onClick}>
        <FontAwesome size="lg" name={itemProperties.fontIcon}
            fixedWidth={true} />&nbsp;{itemProperties.label || field}</NavItem>);
};

HeaderItem.propTypes = {
    itemProperties: PropTypes.object.isRequired,
    field: PropTypes.string.isRequired
};