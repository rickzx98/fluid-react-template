import { FluidFunc, FontAwesome, NavItem, PropTypes, React } from '../imports';

import { BackHeaderItem } from './BackHeaderItem';

export const HeaderItem = ({ itemProperties, field }) => {
    let onClick = itemProperties.onClick;
    if (field === 'Back') {
        return <BackHeaderItem itemProperties={itemProperties} label={itemProperties.label || field} />;
    }
    if (itemProperties.fluid) {
        onClick = () => {
            const { name, data, resolve } = itemProperties.fluid;
            if (FluidFunc.exists(name)) {
                const promise = FluidFunc.start(name, data);
                if (resolve && resolve instanceof Function) {
                    resolve(promise);
                }
            }
        };
    }
    return (<NavItem disabled={!itemProperties.isActive || (itemProperties.isActive && !itemProperties.isActive())} onClick={onClick}>
        <FontAwesome size="lg" name={itemProperties.fontIcon || itemProperties.icon}
            fixedWidth={true} />&nbsp;{itemProperties.label || field}</NavItem>);
};

HeaderItem.propTypes = {
    itemProperties: PropTypes.object.isRequired,
    field: PropTypes.string.isRequired
};