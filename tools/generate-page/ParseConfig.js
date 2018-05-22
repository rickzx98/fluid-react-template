import { FluidFunc, fs } from "./imports";

import { PARSE_CONFIG } from "./fluid.info";

FluidFunc.create(PARSE_CONFIG)
    .onStart(action)
    .spec("encoding")
    .spec("jsonPath", { require: true });
function action({ jsonPath, encoding }) {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPath(), encoding ? encoding() : undefined, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    config: JSON.parse(data)
                });
            }
        });
    });
}