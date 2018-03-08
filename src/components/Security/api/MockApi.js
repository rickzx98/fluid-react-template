export default class MockApi {
  static getCurrentUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          userId: 'dummy',
          username: 'Dummy User',
          departmentId: 'Dummy Dept'
        });
      }, 300);
    });
  }
}
