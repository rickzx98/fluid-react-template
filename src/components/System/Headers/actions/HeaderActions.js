import { HEADER_CALL_CONTROL_ACTION, HEADER_SET_CONTROLS } from './';

export function setHeaderControls(headerControls) {
    return {
        type: HEADER_SET_CONTROLS,
        headerControls
    };
}

export function callHeaderControlAction(callType, payload) {
    return {
        type: HEADER_CALL_CONTROL_ACTION,
        callType,
        payload
    };
}