import { FluidApi, FluidFunc } from "../../imports";

import { PAGE_NAME } from "../../constants";

export default {
    development: () => new Promise((resolve, reject) => {
        FluidApi.storage(PAGE_NAME).then(({ data }) => {
            
        });
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
            FluidFunc.start(param.pageName(), { action: 'loginCredentials', ...paramCopy })
                .then(({ data }) => {
                    resolve({ data });
                })
                .catch(error => { reject(error); });
        } catch (error) {
            reject(error);
        }
    })
};