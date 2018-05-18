import { Dealer, FIELD_BLOCK_NO, FIELD_COMPANY, FIELD_DATE_CREATED, FIELD_OWNER, FIELD_RECORD_TYPE, FIELD_STATUS, getLabel } from '../imports';

import { Registration } from './RegistrationType';

export default () => {
    return [{
        field: FIELD_BLOCK_NO,
        skipRender: true,
        data: {
            default: '002'
        }
    },
    {
        field: FIELD_RECORD_TYPE,
        skipRender: true,
        data: {
            default: 'registration'
        }
    },
    {
        field: FIELD_STATUS,
        skipRender: true,
        data: {
            default: 'registered'
        }
    },
    {
        field: FIELD_DATE_CREATED,
        skipRender: true,
        data: {
            default: '01/26/17'
        }
    },
    {
        field: FIELD_COMPANY,
        label: getLabel('LABEL_COMPANY'),
        data: {
            default: 'Department of Motor Vehicle'
        }
    },
    {
        field: FIELD_OWNER,
        label: getLabel('LABEL_OWNER'),
        data: {
            default: 'Joanne'
        }
    }, {
        field: Registration.BRANCH,
        label: getLabel('LABEL_BRANCH'),
        data: {
            default: 'Metro Manila'
        }
    }, {
        field: Registration.REGISTERED_DATE,
        label: getLabel('LABEL_REGISTERED_DATE'),
        data: {
            default: 'January 26, 2017'
        }
    }, {
        field: Registration.PLATE,
        label: getLabel('LABEL_PLATE_NO'),
        data: {
            default: 'AAZ2808'
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
    }];
};