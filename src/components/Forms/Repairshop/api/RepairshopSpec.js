import { Dealer, FIELD_BLOCK_NO, FIELD_COMPANY, FIELD_DATE_CREATED, FIELD_OWNER, FIELD_RECORD_TYPE, FIELD_STATUS, getLabel } from '../imports';

import { Repairshop } from './RepairshopType';

export default () => {
    return [{
        field: FIELD_BLOCK_NO,
        skipRender: true,
        data: {
            default: '005'
        }
    },
    {
        field: FIELD_RECORD_TYPE,
        skipRender: true,
        data: {
            default: 'repairShop'
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
            default: '10/01/17'
        }
    },
    {
        field: FIELD_COMPANY,
        label: getLabel('LABEL_COMPANY'),
        data: {
            default: 'Cindy\'s Repairshop'
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
        field: Repairshop.REPAIR_DATE,
        skipRender: true,
        data: {
            default: 'October 01, 2017'
        }
    },
    {
        label: getLabel('LABEL_DAMAGES'),
        field: Repairshop.DAMAGES,
        data: {
            default: 'front and left windshield, front hood'
        }
    }, {
        label: getLabel('LABEL_MILEAGE'),
        field: Repairshop.MILEAGE,
        data: {
            default: '14000km'
        }
    }, {
        label: getLabel('LABEL_REPORT'),
        field: Repairshop.REPORT,
        data: {
            default: 'customer crashed in a tree'
        }
    }, {
        label: getLabel('LABEL_REPAIR_COST'),
        field: Repairshop.REPAIR_COST,
        data: {
            default: '$800'
        }
    }];
};