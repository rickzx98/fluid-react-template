import { CrudPage, getLabel } from './imports';

import { Dealer } from './api/DealerType';
import FormSpecs from './api/DealerSpec';
import { PAGE_NAME } from './constants';
import TableColumns from './api/DealerColumns';

export const DealerPage = CrudPage({
    pageName: PAGE_NAME,
    FormSpecs,
    TableColumns,
    fieldKey: Dealer.ENGINE_NO,
    page: {
        banner: '/library-header.jpg',
        label: getLabel('LABEL_TOYOTA'),
        icon: 'dollar'
    },
    formProps: {
        fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8'
    }
});
