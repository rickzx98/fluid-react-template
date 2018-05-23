import { FluidFunc, fs, path } from "../imports";
import { PAGES, TYPES } from "../ConfigType";

import { CREATE_API_FORM_TYPE } from "../fluid.info";

FluidFunc.create(CREATE_API_FORM_TYPE).onStart(action);

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const types = subComponent[subField][TYPES];
                    const typeIndex = path.resolve(__dirname, `../../../src/types/index.js`);
                    const formType = path.resolve(__dirname, `../../../src/types/${subField}.js`);
                    let indexContent = fs.readFileSync(typeIndex);
                    if (!(indexContent.indexOf(subField) > -1)) {
                        indexContent += `\nexport { ${subField} } from "./${subField}";`;
                        fs.writeFileSync(typeIndex, indexContent);
                    }
                    if (!fs.existsSync(formType)) {
                        let content = `export const ${subField} = {\n`;
                        Object.keys(types).forEach((type, index, array) => {
                            content += `\t${type.toUpperCase()}: "${type}"`;
                            if (index < array.length - 1) {
                                content += ",\n";
                            }
                        });
                        content += "\n};";
                        fs.writeFileSync(formType, content);
                    }

                }
            }
        }
    }
}