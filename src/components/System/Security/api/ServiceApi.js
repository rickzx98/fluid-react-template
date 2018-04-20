const SERVER_HOST = process.env.SERVER_HOST || '';
const AUTH_USER = process.env.HEADER_AUTH_USER || 'AUTH_USER';
const AUTH_UID = process.env.HEADER_AUTH_UID || 'AUTH_UID';
const AUTH_DEPT = process.env.HEADER_AUTH_DEPT || 'AUTH_DEPT';
const CURRENT_USER_URL = `${SERVER_HOST}/`;
const SERVER_CREDENTIALS = process.env.SERVER_CREDENTIALS || 'same-origin';

export default class ServiceApi {

  static getCurrentUser() {
    return new Promise((resolve, reject) => {
      fetch(CURRENT_USER_URL, {
        headers: {
          'Cache': 'no-cache'
        },
        credentials: SERVER_CREDENTIALS
      })
        .then(response => {
          const userId = response.headers.get(AUTH_UID);
          const username = response.headers.get(AUTH_USER);
          const departmentId = response.headers.get(AUTH_DEPT);
          resolve({ userId, username, departmentId });
        }, reject);
    });
  }

}
