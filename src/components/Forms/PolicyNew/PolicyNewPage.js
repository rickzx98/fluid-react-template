import { CrudPage, Dealer, getLabel } from './imports';

import FormSpecs from './api/PolicySpec';
import { PAGE_NAME } from './constants';
import { Policy } from './api/PolicyType';
import TableColumns from './api/PolicyColumns';

export const PolicyNewPage = CrudPage({
    pageName: PAGE_NAME,
    FormSpecs,
    TableColumns,
    fieldKey: Policy.POLICY_NO,
    page: {
        banner: '/library-header.jpg',
        label: getLabel('LABEL_POLICY'),
        icon: 'car'
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
