const SERVER_HOST = 'http://localhost:9080/';
const SERVER_APP_PATH = 'record';
const SERVER_RECORD_PATH = 'services';

import storage from './Storage';

export default {
  environment: {
    production: {
      HEADERS: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      CREDENTIALS: 'same-origin',
      CREATE_RECORD: `${SERVER_HOST}${SERVER_APP_PATH}/${SERVER_RECORD_PATH}/create-record/`,
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
