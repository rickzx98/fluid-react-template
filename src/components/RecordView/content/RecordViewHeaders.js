import { getLabel } from '../../../utils/';

export const viewHeaders = (back, refresh, isActive) => {
    const headers = {};
    headers['returnToList'] = {
        label: getLabel('LABEL_BACK'),
        fontIcon: 'arrow-left',
        onClick: back,
        isActive: isActive
    };
    headers['refreshRecord'] = {
        label: getLabel('LABEL_REFRESH'),
        fontIcon: 'refresh',
        onClick: refresh,
        isActive: isActive
    };
    return headers;
};