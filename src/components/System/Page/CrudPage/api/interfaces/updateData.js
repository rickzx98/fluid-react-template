import { FluidApi, FluidFunc } from '../../../imports';

export default {
  development: ({ id, primaryField, input, pageName }) => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        FluidApi.storage(pageName())
          .then(({ data }) => {
            let newData = {};
            data().forEach((value, index) => {
              if (value[primaryField()] === id()) {
                newData = { ...value, ...input() };
                FluidApi.storage(pageName(), {
                  field: index,
                  value: newData
                }).then(() => {
                  resolve({
                    data: newData
                  });
                });
              }
            });
          });
      } catch (error) {
        reject(error);
      }
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
      FluidFunc.start(param.pageName(), { action: 'updateData', ...paramCopy })
        .then(({ data }) => {
          resolve({ data });
        })
        .catch(error => { reject(error); });
    } catch (error) {
      reject(error);
    }
  })
};
