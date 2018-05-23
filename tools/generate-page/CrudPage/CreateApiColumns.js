import { COLUMNS, FIELD, LABEL, PAGES, PRIMARY_KEY, SKIP_RENDER, TYPES } from "../ConfigType";
import { FluidFunc, fs, path } from "../imports";

import { CREATE_API_COLUMNS } from "../fluid.info";

FluidFunc.create(CREATE_API_COLUMNS).onStart(action);

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const columnPath = path.resolve(__dirname, `../../../src/components/${field}/${subField}/api/${subField}Columns.js`);
                    if (!fs.existsSync(columnPath)) {
                        const types = subComponent[subField][TYPES];
                        const columns = subComponent[subField][COLUMNS];
                        let columnContent = `import { ${subField}, getLabel } from "../imports";\n`;
                        columnContent += "export default [";
                        if (columns) {
                            columns.forEach((type, index, array) => {
                                const theType = types[type];
                                columnContent += `{\n\t${LABEL} : getLabel("${theType[LABEL]}"),\n\t${FIELD} : ${subField}.${type.toUpperCase()},\n\t${PRIMARY_KEY} : ${theType[PRIMARY_KEY] || "false"},\n\t${SKIP_RENDER} : ${theType[SKIP_RENDER] || "false"}\n}`;
                                if (index < array.length - 1) {
                                    columnContent += ",\n";
                                }
                            });
                        }
                        columnContent += "];";
                        fs.writeFileSync(columnPath, columnContent);
                    }
                }
            }
        }
    }
}