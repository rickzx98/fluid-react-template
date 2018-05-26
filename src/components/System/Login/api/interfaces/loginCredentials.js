import { FluidApi, FluidFunc, Login, User } from "../../imports";

export default {
    development: ({ login, pageName }) => new Promise((resolve, reject) => {
        const username = login(Login.USERNAME);
        const password = login(Login.PASSWORD);
        setTimeout(() => {
            FluidApi.storage(pageName()).then(({ data }) => {
                const result = data().filter(dt => dt[User.USERNAME] === username && dt[User.PASSWORD] === password)[0];
                if (!result) {
                    reject({
                        data: "Invalid username or password"
                    });
                } else {
                    resolve({
                        data: result
                    });
                }
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