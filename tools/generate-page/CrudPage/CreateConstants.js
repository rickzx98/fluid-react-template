import { FluidFunc, fs, path } from "../imports";

import { CREATE_CONSTANTS } from "../fluid.info";
import { PAGES } from "../ConfigType";

FluidFunc.create(CREATE_CONSTANTS).onStart(action);

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const contantsPath = path.resolve(__dirname, `../../../src/components/${field}/${subField}/constants.js`)
                    if (!fs.existsSync(contantsPath)) {
                        fs.writeFileSync(contantsPath, `export const PAGE_NAME = "${subField.toLowerCase()}";`);
                    }
                }
            }
        }
    }
}

