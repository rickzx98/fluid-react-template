import { CollapseHeader, FontAwesome } from '../../common/';

import { FluidMergedView } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';
import { getLabel } from '../../../utils/';

export const RecordViewItemDetail = ({ itemDetails, owner }) => {
    return (<CollapseHeader panelStyle={'panel-primary'} heading={
        <span><FontAwesome name="list" /> {getLabel('LABEL_ITEM_DETAIL')}</span>
    }>
        <div className="owner-view">
            <div className="merged-view-field">
                <span className="merged-view-label">{getLabel('LABEL_OWNER')}</span>
                <span className="merged-view-value">{owner}</span>
            </div>
        </div>
        <FluidMergedView value={itemDetails} />
    </CollapseHeader>);
};

RecordViewItemDetail.propTypes = {
    itemDetails: PropTypes.array,
    owner: PropTypes.string.isRequired
};