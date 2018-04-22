import { Dealer } from './DealerType';
import { getLabel } from '../imports';

export default [
    {
        label: getLabel('LABEL_ENGINE'),
        field: Dealer.ENGINE_NO
    },
    {
        label: getLabel('LABEL_BRAND'),
        field: Dealer.BRAND
    },
    {
        label: getLabel('LABEL_MODEL'),
        field: Dealer.MODEL
    },
    {
        label: getLabel('LABEL_YEAR'),
        field: Dealer.YEAR
    }
];