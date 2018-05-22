import { FluidApi, FluidFunc } from '../../../imports';

export default {
    development: ({ field, value, pageName }) => new Promise((resolve) => {
        setTimeout(() => {
            FluidApi.storage(pageName()).then(({ data }) => {
                const result = data().filter(resultData => value().trim().length > 0 && resultData[field()].trim().toLowerCase().indexOf(value().trim().toLowerCase()) > -1);
                const resolvedData = {};
                resolvedData[pageName()] = result;
                resolve({
                    data: resolvedData
                });
            });
        }, 300);
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
            FluidFunc.start(param.pageName(), { action: 'searchData', ...paramCopy })
                .then(({ data }) => {
                    resolve({ data });
                })
                .catch(error => { reject(error); });
        } catch (error) {
            reject(error);
        }
    })
};
