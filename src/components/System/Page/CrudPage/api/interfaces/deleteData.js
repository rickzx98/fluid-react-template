import { FluidApi, FluidFunc } from '../../../imports';

export default {
  development: ({ id, primaryField, pageName }) => new Promise((resolve) => {
    setTimeout(() => {
      FluidApi.storage(pageName()).then(({ data }) => {
        data().forEach((value, index) => {
          if (value[primaryField()] === id()) {
            FluidApi.storage(pageName(), {
              remove: index
            }).then(() => {
              resolve();
            });
          }
        });
      });
    }, 500);
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
      FluidFunc.start(param.pageName, { action: 'deleteData', ...paramCopy })
        .then(({ data }) => {
          resolve({ data });
        })
        .catch(error => { reject(error); });
    } catch (error) {
      reject(error);
    }
  })
};
