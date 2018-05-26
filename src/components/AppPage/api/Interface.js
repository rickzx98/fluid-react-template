import { LoginApi, PageAPI, SecurityAPI } from '../imports';
export default {
  ...PageAPI,
  ...LoginApi,
  ...SecurityAPI
};
