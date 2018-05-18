import { Dealer, FIELD_BLOCK_NO, FIELD_COMPANY, FIELD_DATE_CREATED, FIELD_OWNER, FIELD_RECORD_TYPE, FIELD_STATUS, getLabel } from '../imports';

import { Maintenance } from './MaintenanceType';

export default () => {
    return [{
        field: FIELD_BLOCK_NO,
        skipRender: true,
        data: {
            default: '004'
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
            default: '05/09/17'
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
        field: Maintenance.MAINTENANCE_DATE,
        skipRender: true,
        data: {
            default: 'May 09, 2017'
        }
    },
    {
        label: getLabel('LABEL_TRANSACTION'),
        field: Maintenance.TRANSACTION,
        data: {
            default: 'preventive maintenance'
        }
    }, {
        label: getLabel('LABEL_MILEAGE'),
        field: Maintenance.MILEAGE,
        data: {
            default: '5000km'
        }
    }];
};