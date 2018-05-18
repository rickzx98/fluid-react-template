import { Dealer, FIELD_BLOCK_NO, FIELD_COMPANY, FIELD_DATE_CREATED, FIELD_OWNER, FIELD_RECORD_TYPE, FIELD_STATUS, getLabel } from '../imports';

import { Policy } from './PolicyType';

export default () => {
    return [{
        field: FIELD_BLOCK_NO,
        skipRender: true,
        data: {
            default: '007'
        }
    },
    {
        field: FIELD_RECORD_TYPE,
        skipRender: true,
        data: {
            default: 'insurance'
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
            default: '01/31/17'
        }
    },
    {
        field: FIELD_COMPANY,
        label: getLabel('LABEL_COMPANY'),
        data: {
            default: 'Autoguard Insurance'
        }
    },
    {
        field: FIELD_OWNER,
        label: getLabel('LABEL_OWNER'),
        data: {
            default: 'Joanne'
        }
    },
    {
        label: getLabel('LABEL_ENGINE'),
        field: Dealer.ENGINE_NO,
        isDisabled: () => true,
        data: {
            require: true,
            default: '04222018001'
        }
    },
    {
        label: getLabel('LABEL_BRAND'),
        field: Dealer.BRAND,
        isDisabled: () => true,
        data: {
            default: 'Toyota',
            require: true
        }
    },
    {
        label: getLabel('LABEL_MODEL'),
        field: Dealer.MODEL,
        isDisabled: () => true,
        data: {
            default: 'Vios',
            require: true
        }
    },
    {
        label: getLabel('LABEL_YEAR'),
        field: Dealer.YEAR,
        isDisabled: () => true,
        data: {
            default: '2017',
            require: true
        }
    },
    {
        field: Policy.POLICY_NO,
        skipRender: true,
        data: {
            default: '092163278'
        }
    },
    {
        label: getLabel('LABEL_PRODUCT'),
        field: Policy.PRODUCT,
        data: {
            default: 'motor'
        }
    },
    {
        label: getLabel('LABEL_COVERAGES'),
        field: Policy.COVERAGES,
        data: {
            default: 'comprehensive and liability'
        }
    }, {
        label: getLabel('LABEL_INFORCE_DATE'),
        field: Policy.INFORCE_DATE,
        data: {
            default: 'February 14, 2018'
        }
    }];
};