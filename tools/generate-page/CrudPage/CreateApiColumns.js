import { DATA, FIELD, LABEL, PAGES, PRIMARY_KEY, REQUIRE, SKIP_RENDER, TYPES } from "../ConfigType";
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
                    const columnPath = path.resolve(__dirname, `../../../src/components/${field}/${subField}/api/${subField}Columns.js`)
                    if (!fs.existsSync(columnPath)) {
                        const types = subComponent[subField][TYPES];
                        let columnContent = `import { ${subField}, getLabel } from "../imports"\n`;
                        columnContent += "export default [";
                        for (let type in types) {
                            if (types.hasOwnProperty(type)) {
                                const theType = types[type];
                                columnContent += `{\n\t${LABEL} : getLabel("${theType[LABEL]}"),\n\t${FIELD} : "${type}",\n\t${PRIMARY_KEY} : ${theType[PRIMARY_KEY] || "false"},\n\t${SKIP_RENDER} : ${theType[SKIP_RENDER] || "false"}\n}`;
                            }
                        }
                        columnContent += "];";
                        fs.writeFileSync(columnPath, columnContent);
                    }
                }
            }
        }
    }
}