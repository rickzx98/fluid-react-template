import { FormSpecs, TableColumns } from './api/';

import { CrudPage } from '../../System/Page/';
import { PAGE_NAME } from './constants';
import { getLabel } from '../../../utils/';
import { User } from '../../../types/';
import {UserGroupDropdown} from './components/UserGroupDropdown';
export const AdminUserPage = CrudPage({
  pageName: PAGE_NAME,
  FormSpecs,
  TableColumns,
  page: {
    banner: '/settings-header.jpg',
    label: getLabel('LABEL_USERS'),
    icon: 'users'
  },
  formProps: {
    fieldClass: () => 'col-sm-6 col-sm-offset-right-6 col-md-4 col-md-offset-right-8',
    fieldComponent: (field) => {
      switch (field) {
        case User.USER_GROUP:
          return UserGroupDropdown;
        default:
          return false;
      }
    }
  }
});
