import * as Actions from './actions/NotificationActions';

import { ConnectedNotificationPage } from './NotificationPage';
import { notificationsReducer } from './reducer/NotificationReducer';

export const NotificationActions = Actions;
export const NotificationReducer = notificationsReducer;
export const NotificationPage = ConnectedNotificationPage;