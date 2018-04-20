import { User } from '../../../../types';
import { getLabel } from '../../../../utils';

export default [
  {
    field: User.ID,
    primaryKey: true,
    skipRender: true
  },
  {
    field: User.FULL_NAME,
    label: getLabel('LABEL_NAME'),
  },
  {
    field: User.USER_GROUP,
    label: getLabel('LABEL_USER_GROUP'),
  }];
