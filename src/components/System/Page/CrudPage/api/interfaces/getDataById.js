import { FluidApi, FluidFunc } from '../../../imports';

export default {
  development: ({ pageName, id, primaryField }) => new Promise((resolve) => {
    setTimeout(() => {
      FluidApi.storage(pageName()).then(({ data }) => {
        const result = data().filter(value => value[primaryField()] === id())[0];
        resolve({
          data: result
        });
      });
    }, 400);
  }),
  production: (param) => new Promise((resolve, reject) => {
    let paramCopy = {};
    try {
      for (let field in param) {
        if (param.hasOwnProperty(field)) {
          if (param[field] && field !== 'pageName') {
            paramCopy[field] = param[field]();
          }
        }
      }
      FluidFunc.start(param.pageName, { action: 'getDataById', ...paramCopy })
        .then(({ data }) => {
          resolve({ data });
        })
        .catch(error => { reject(error); });
    } catch (error) {
      reject(error);
    }
  })
};
