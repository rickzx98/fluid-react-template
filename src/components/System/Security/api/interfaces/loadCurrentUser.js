import { FluidApi, FluidFunc, User } from "../../imports";

export default {
    development: ({ pageName, userId }) => new Promise((resolve) => {
        FluidApi.storage(pageName()).then(({ data }) => {
            const result = data().filter(dt => dt[User._ID] === userId())[0];
            resolve({
                data: result
            });
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
            FluidFunc.start(param.pageName(), { action: 'loadCurrentUser', ...paramCopy })
                .then(({ data }) => {
                    resolve({ data });
                })
                .catch(error => { reject(error); });
        } catch (error) {
            reject(error);
        }
    })
};