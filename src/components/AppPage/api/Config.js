const SERVER_HOST = '/';
const SERVER_APP_PATH = 'record';
const SERVER_RECORD_PATH = 'services';

import storage from './Storage';
export default {
  environment: {
    development: () => {
      return {
        mockData: require('../../../utils/Mocks')
      };
    },
    production: {
      CREDENTIALS: 'same-origin',
      FIND_BY_URL: `${SERVER_HOST}${SERVER_APP_PATH}/${SERVER_RECORD_PATH}/find-by/`,
      FIND_BY_ITEM_URL: `${SERVER_HOST}${SERVER_APP_PATH}/${SERVER_RECORD_PATH}/find-by-item/`
    }
  },
  catch: {
    apiError: (error) => {
      console.error(error); // eslint-disable-line
    }
  },
  storage
};
