import { DATA, FIELD, LABEL, PAGES, PRIMARY_KEY, REQUIRE, SKIP_RENDER, TYPES } from "../ConfigType";
import { FluidFunc, fs, path } from "../imports";

import { CREATE_API_FORM_SPEC } from "../fluid.info";
import { ENGINE_METHOD_DIGESTS } from "constants";

FluidFunc.create(CREATE_API_FORM_SPEC).onStart(action);

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const formSpecPath = path.resolve(__dirname, `../../../src/components/${field}/${subField}/api/${subField}FormSpec.js`)
                    if (!fs.existsSync(formSpecPath)) {
                        const types = subComponent[subField][TYPES];
                        let formSpecContent = `import { ${subField}, getLabel } from "../imports"\n`;
                        formSpecContent += "export default () => [";
                        for (let type in types) {
                            if (types.hasOwnProperty(type)) {
                                const theType = types[type];
                                formSpecContent += `{\n\t${LABEL} : getLabel("${theType[LABEL]}"),\n\t${FIELD} : "${theType[FIELD]}",\n\t${PRIMARY_KEY} : ${theType[PRIMARY_KEY] || "false"},\n\t${SKIP_RENDER} : ${theType[SKIP_RENDER] || "false"}`;
                                if (theType[DATA]) {
                                    let dataFieldBuilder = "{\n";
                                    if (theType[DATA][REQUIRE]) {
                                        dataFieldBuilder += `${REQUIRE}: ${theType[DATA][REQUIRE]}`;
                                    }
                                    dataFieldBuilder += "}";
                                    formSpecContent += `,\n\t${DATA}: ${dataFieldBuilder}`
                                }
                                formSpecContent += "}";
                            }
                        }
                        formSpecContent += "];";
                        fs.writeFileSync(formSpecPath, formSpecContent);
                    }
                }
            }
        }
    }
}