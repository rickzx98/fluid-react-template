import { FluidFunc, fs, path } from "../imports";

import { CREATE_API } from "../fluid.info";
import { PAGES } from "../ConfigType";

FluidFunc.create(CREATE_API).onStart(action);
function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const subFieldApiPath = path.resolve(__dirname, `../../../src/components/${field}/${subField}/api`);
                    const subFieldApiIndexPath = path.resolve(subFieldApiPath, "index.js");
                    if (!fs.existsSync(subFieldApiPath)) {
                        fs.mkdirSync(subFieldApiPath);
                    }
                    if (!fs.existsSync(subFieldApiIndexPath)) {
                        const indexContent = fs.readFileSync(path.resolve(__dirname, "./ApiFiles/index"), "utf-8");
                        fs.writeFileSync(subFieldApiIndexPath, indexContent.replace(/\${pageName}/g, subField));
                    }
                }
            }
        }
    }
}