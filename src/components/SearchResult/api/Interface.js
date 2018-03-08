import { Record } from '../../../types';

export default {
  findRecords: {
    development: ({ mockData, type, text }) => new Promise((resolve) => {
      const data = mockData().default;
      setTimeout(() => {
        let filtered;
        switch (type()) {
          case Record.OWNER:
            filtered = data.filter(record => record[type()].toLowerCase().indexOf(text().toLowerCase()) > -1);
            break;
          case Record.ITEM:
            filtered = data.filter(record => JSON.stringify(record[type()]).toLowerCase().indexOf(text().toLowerCase()) > -1);
            break;
          default:
            filtered = [];
            break;
        }
        resolve({ values: filtered });
      }, 400);
    }),
    production: ({ FIND_BY_URL, CREDENTIALS, type, text }) => new Promise((resolve, reject) => {
      fetch(`${FIND_BY_URL()}${type()}?criteria=${text()}`, {
        headers: {
          'Cache': 'no-cache',
          'pragma': 'no-cache',
          'cache-control': 'no-cache'
        },
        credentials: CREDENTIALS()
      }).then(response => {
        if (!response.ok) {
          response.json().then(result => {
            resolve(result);
          }).catch(error => { reject(error); });
        } else {
          reject(new Error(response.statusText));
        }
      }).catch(error => { reject(error); });
    })
  }
};
