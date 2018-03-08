import { Page } from '../../common/';
import PropTypes from 'prop-types';
import React from 'react';
import { Record } from '../../../types/';
import { RecordViewItemDetail } from './RecordViewItemDetail';
import { RecordViewItemHistory } from './RecordViewItemHistory';
import { getLabel } from '../../../utils/';

export const RecordViewBody = ({ record }) => {
    const itemDetails = record.map(rec => rec[Record.ITEM]);
    return (<Page className="record-view" banner="/record-view-banner.jpg"
        icon="database" label={getLabel('LABEL_RECORD')}>
        <div className="col-sm-3">
            <RecordViewItemDetail itemDetails={itemDetails} owner={record && record.length ? record[0][Record.OWNER] : ''} />
        </div>
        <div className="col-sm-9">
            <RecordViewItemHistory record={record} />
        </div>
    </Page>);
};

RecordViewBody.propTypes = {
    record: PropTypes.array.isRequired
};