import { FluidFunc, fs, path } from "../imports";

import { CREATE_COMPONENT_FOLDERS } from "../fluid.info";
import { PAGES } from "../ConfigType";

FluidFunc.create(CREATE_COMPONENT_FOLDERS)
    .onStart(action);

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const fieldPath = path.resolve(__dirname, `../../../src/components/${field}`);
            if (!fs.existsSync(fieldPath)) {
                fs.mkdirSync(fieldPath);
            }
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const subFieldPath = path.resolve(__dirname, `../../../src/components/${field}/${subField}`);
                    if (!fs.existsSync(subFieldPath)) {
                        fs.mkdirSync(subFieldPath);
                    }
                }
            }
        }
    }
}