import { CrudPage, Dealer, getLabel } from './imports';

import FormSpecs from './api/ClaimSpec';
import { PAGE_NAME } from './constants';
import TableColumns from './api/ClaimColumns';

export const ClaimPage = CrudPage({
    pageName: PAGE_NAME,
    FormSpecs,
    TableColumns,
    page: {
        banner: '/library-header.jpg',
        label: getLabel('LABEL_CLAIM'),
        icon: 'phone'
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
