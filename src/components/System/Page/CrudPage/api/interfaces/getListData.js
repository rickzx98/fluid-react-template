import { FluidApi, FluidFunc } from '../../../imports';

export default {
  development: ({ pageName }) => new Promise((resolve, reject) => {
    setTimeout(() => {
      FluidApi.storage(pageName()).then(({ data }) => {
        const result = {};
        result[pageName()] = data();
        resolve({
          data: result
        });
      }).catch(error => {
        reject(error);
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
      FluidFunc.start(param.pageName, { action: 'getListData', ...paramCopy })
        .then(({ data }) => {
          resolve({ data });
        })
        .catch(error => { reject(error); });
    } catch (error) {
      reject(error);
    }
  })
};

