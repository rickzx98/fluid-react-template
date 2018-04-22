import { Dealer, FIELD_BLOCK_NO, FIELD_COMPANY, FIELD_DATE_CREATED, FIELD_OWNER, FIELD_RECORD_TYPE, getLabel } from '../imports';

import { Claim } from './ClaimType';

export default () => {
    return [{
        field: FIELD_BLOCK_NO,
        skipRender: true,
        data: {
            default: '006'
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
        field: FIELD_DATE_CREATED,
        skipRender: true,
        data: {
            default: '10/01/17'
        }
    },
    {
        field: FIELD_COMPANY,
        label: getLabel('LABEL_COMPANY'),
        data: {
            default: 'Toyota'
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
        field: Claim.POLICY_NO,
        label: getLabel('LABEL_POLICY_NO'),
        isDisabled: () => true,
        data: {
            default: '55543708'
        }
    },
    {
        field: Claim.CLAIM_NO,
        label: getLabel('LABEL_CLAIM_NO'),
        data: {
            default: '10492839'
        }
    },
    {
        field: Claim.REPORTED_DATE,
        label: getLabel('LABEL_REPORTED_DATE'),
        data: {
            default: 'October 01, 2017'
        }
    }, {
        label: getLabel('LABEL_MILEAGE'),
        field: Claim.MILEAGE,
        data: {
            default: '14000km'
        }
    }, {
        label: getLabel('LABEL_COVERAGE'),
        field: Claim.COVERAGE,
        data: {
            default: 'comprehensive'
        }
    }, {
        label: getLabel('LABEL_COVERAGE_STATUS'),
        field: Claim.COVERAGE_STATUS,
        data: {
            default: 'complete'
        }
    }, {
        label: getLabel('LABEL_CLAIM_STATUS'),
        field: Claim.CLAIM_STATUS,
        data: {
            default: 'open'
        }
    }];
};