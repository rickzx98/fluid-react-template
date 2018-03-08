import { Record } from '../types/';

export function sortRecordDateDesc(a, b) {
    return new Date(b[Record.DATE_CREATED]) - new Date(a[Record.DATE_CREATED]);
}
