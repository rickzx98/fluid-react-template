import { FIELD_BLOCK_NO, FIELD_COMPANY, FIELD_DATE_CREATED, FIELD_OWNER, FIELD_RECORD_TYPE, FIELD_STATUS, getLabel } from '../imports';

import { Dealer } from './DealerType';

export default () => [
    {
        field: FIELD_BLOCK_NO,
        skipRender: true,
        data: {
            default: '001'
        }
    },
    {
        field: FIELD_RECORD_TYPE,
        skipRender: true,
        data: {
            default: 'dealer'
        }
    },
    {
        field: FIELD_STATUS,
        skipRender: true,
        data: {
            default: 'released'
        }
    },
    {
        field: FIELD_DATE_CREATED,
        skipRender: true,
        data: {
            default: '01/25/17'
        }
    },
    {
        label: getLabel('LABEL_COMPANY'),
        field: FIELD_COMPANY,
        data: {
            default: 'Toyota'
        }
    },
    {
        label: getLabel('LABEL_OWNER'),
        field: FIELD_OWNER,
        data: {
            default: 'Joanne'
        }
    },
    {
        label: getLabel('LABEL_ENGINE'),
        field: Dealer.ENGINE_NO,
        primaryKey: true,
        data: {
            require: true,
            default: '04222018001'
        }
    },
    {
        label: getLabel('LABEL_BRAND'),
        field: Dealer.BRAND,
        data: {
            default: 'Toyota',
            require: true
        }
    },
    {
        label: getLabel('LABEL_MODEL'),
        field: Dealer.MODEL,
        data: {
            default: 'Vios',
            require: true
        }
    },
    {
        label: getLabel('LABEL_YEAR'),
        field: Dealer.YEAR,
        data: {
            default: '2017',
            require: true
        }
    },
    {
        field: Dealer.DATE_PURCHASED,
        label: getLabel('LABEL_DATE_PURCHASED'),
        data: {
            default: 'January 25, 2017'
        }
    },
];