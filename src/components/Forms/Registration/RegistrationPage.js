import { CrudPage, Dealer, getLabel } from './imports';

import FormSpecs from './api/RegistrationSpec';
import { PAGE_NAME } from './constants';
import { Registration } from './api/RegistrationType';
import TableColumns from './api/RegistrationColumns';

export const RegistrationPage = CrudPage({
    pageName: PAGE_NAME,
    FormSpecs,
    TableColumns,
    fieldKey: Registration.VEHICLE_ID,
    page: {
        banner: '/library-header.jpg',
        label: getLabel('LABEL_REG_COMP'),
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
