import { BANNER, ICON, LABEL, PAGE, PAGES } from "../ConfigType";
import { FluidFunc, fs, path } from "../imports";

import { CREATE_PAGE } from "../fluid.info";

FluidFunc.create(CREATE_PAGE).onStart(action).spec("config", { require: true });

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const comp = subComponent[subField];
                    const pagePath = path.resolve(__dirname, `../../../src/components/${field}/${subField}/${subField}Page.js`)
                    if (!fs.existsSync(pagePath)) {
                        let content = `import { CrudPage, ${subField}, getLabel } from "./imports";\n`;
                        content += `import { FormSpecs, TableColumns } from "./api/";\n`;
                        content += "import { PAGE_NAME } from  \"./contants\";\n";
                        content += `export const ${subField}Page = CrudPage({\n`;
                        content += "\tpageName: PAGE_NAME,\n";
                        content += "\tFormSpecs,\n";
                        content += "\tTableColumns,\n";
                        content += "\tpage: {\n";
                        content += `\t\tbanner: "${comp[PAGE][BANNER]}",\n`;
                        content += `\t\tlabel: getLabel("${comp[PAGE][LABEL]}"),\n`;
                        content += `\t\ticon: ${comp[PAGE][ICON]} }\n`;
                        content += "\t\t});";
                        fs.writeFileSync(pagePath, content);
                    }
                }
            }
        }
    }
}