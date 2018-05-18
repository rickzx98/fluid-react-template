import { CrudPage, Dealer, getLabel } from './imports';

import FormSpecs from './api/RepairshopSpec';
import { PAGE_NAME } from './constants';
import TableColumns from './api/RepairshopColumns';

export const RepairshopPage = CrudPage({
    pageName: PAGE_NAME,
    FormSpecs,
    TableColumns,
    page: {
        banner: '/library-header.jpg',
        label: getLabel('LABEL_REPAIRSHOP'),
        icon: 'wrench'
    },
    formProps: {
        fieldClass: (field) => {
            switch (field) {
                case Dealer.BRAND:
                case Dealer.ENGINE_NO:
                case Dealer.MODEL:
                case Dealer.YEAR:
                    return 'col-sm-3';
                default:
                    return 'col-sm-6';
            }
        }
    }
});
