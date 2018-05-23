import { FluidFunc, fs, path } from "../imports";

import { CREATE_PAGE_INDEX } from "../fluid.info";
import { PAGES } from "../ConfigType";

FluidFunc.create(CREATE_PAGE_INDEX).onStart(action).spec("config", { require: true });


function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const pageIndexPage = path.resolve(__dirname, `../../../src/components/${field}/${subField}/index.js`);
                    if (!fs.existsSync(pageIndexPage)) {
                        let content = `export { ${subField}Page } from "./${subField}Page";\n`;
                        fs.writeFileSync(pageIndexPage, content);
                    }
                }
            }
        }
    }
}