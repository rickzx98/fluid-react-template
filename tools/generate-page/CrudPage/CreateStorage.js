import { FluidFunc, fs, path } from "../imports";
import { PAGE, PAGES, STORAGE } from "../ConfigType";

import { CREATE_STORAGE } from "../fluid.info";

FluidFunc.create(CREATE_STORAGE).onStart(action).spec("config", { require: true });

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const storage = subComponent[subField][PAGE][STORAGE] || [];
                    const storageIndex = path.resolve(__dirname, `../../../src/storage/index.js`);
                    const storagePage = path.resolve(__dirname, `../../../src/storage/${subField}.js`);
                    let indexContent = fs.readFileSync(storageIndex);
                    if (!(indexContent.indexOf(subField) > -1)) {
                        indexContent = `import  ${subField.toLowerCase()}  from "./${subField}";\n` + indexContent;
                        indexContent = indexContent.substring(0, indexContent.length - 2);
                        indexContent = indexContent.trim();
                        if (indexContent.charAt(indexContent.length - 1) !== "{") {
                            indexContent += ",";
                        }
                        indexContent += ` ${subField.toLowerCase()} };`;
                        fs.writeFileSync(storageIndex, indexContent);
                    }
                    if (!fs.existsSync(storagePage)) {
                        fs.writeFileSync(storagePage, `export default ${JSON.stringify(storage)};`);
                    }

                }
            }
        }
    }
}