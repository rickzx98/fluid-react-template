import * as types from './';

export function openDialog(dialog) {
    dialog.show = true;
    return {
        type: types.OPEN_DIALOG,
        payload: dialog
    };
}
export function closeDialog() {
    return {
        type: types.CLOSE_DIALOG
    };
}