import { ALERT_DANGER, ALERT_INFO, ALERT_SUCCESS, ALERT_WARNING, REMOVE_ALERT } from '../actions/';

import { generateUID } from '../imports';
import initialState from './InitialState';

export function notificationsReducer(state = initialState, action) {
    const defaultAlert = {
        id: generateUID(),
        timeout: 3000
    };
    switch (action.type) {
        case ALERT_DANGER:
            return [...state, { ...defaultAlert, type: 'danger', message: action.message }];
        case ALERT_INFO:
            return [...state, { ...defaultAlert, type: 'info', message: action.message }];
        case ALERT_SUCCESS:
            return [...state, { ...defaultAlert, type: 'success', message: action.message }];
        case ALERT_WARNING:
            return [...state, { ...defaultAlert, type: 'warning', message: action.message }];
        case REMOVE_ALERT: {
            const alerts = [...state];
            alerts.forEach((alert, index) => {
                if (alert.id === action.id) {
                    alerts.splice(index, 1);
                }
            });
            return alerts;
        }
        default:
            return state;
    }
}
