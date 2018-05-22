import { FluidFunc, fs, path } from "../imports";

import { CREATE_IMPORTS } from "../fluid.info";
import { PAGES } from "../ConfigType";

FluidFunc.create(CREATE_IMPORTS).onStart(action).spec("config", { require: true });


function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const importsPath = path.resolve(__dirname, `../../../src/components/${field}/${subField}/imports.js`)
                    if (!fs.existsSync(importsPath)) {
                        let content = "export { getLabel } from \"../../../utils/\";\n";
                        content += "export { CrudPage } from \"../../System/Page/\";\n";
                        content += `export { ${subField} } from "../../../types/";\n`;
                        fs.writeFileSync(importsPath, content);
                    }
                }
            }
        }
    }
}