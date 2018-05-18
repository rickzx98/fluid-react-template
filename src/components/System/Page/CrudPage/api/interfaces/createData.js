import { FluidApi, FluidFunc, generateUID } from '../../../imports';

export default {
  development: ({ pageName, input }) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const newData = { _id: generateUID(), ...input() };
      FluidApi.storage(pageName(), {
        value: newData
      }).then(() => {
        resolve({
          data: newData
        });
      }).catch(error => { reject(error); });
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
      FluidFunc.start(param.pageName(), { action: 'createData', ...paramCopy })
        .then(({ data }) => {
          resolve({ data });
        })
        .catch(error => { reject(error); });
    } catch (error) {
      reject(error);
    }
  })
};
