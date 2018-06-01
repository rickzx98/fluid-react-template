import { FluidFunc, fs, path } from "../imports";
import { ICON, PAGE, PAGES } from "../ConfigType";

import { CREATE_ROUTES } from "../fluid.info";

FluidFunc.create(CREATE_ROUTES).onStart(action).spec("config", { require: true });

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
                    const icon = subComponent[subField][PAGE][ICON];
                    const routeIndex = path.resolve(__dirname, `../../../src/routes/index.js`);
                    const routePage = path.resolve(__dirname, `../../../src/routes/${subField}.js`);
                    let indexContent = fs.readFileSync(routeIndex);
                    if (!(indexContent.indexOf(subField) > -1)) {
                        indexContent = `import  ${subField}  from "./${subField}";\n` + indexContent;
                        indexContent = indexContent.substring(0, indexContent.length - 2);
                        indexContent = indexContent.trim();
                        if (indexContent.charAt(indexContent.length - 1) !== "[") {
                            indexContent += ",";
                        }
                        indexContent += ` ${subField} ];`;
                        fs.writeFileSync(routeIndex, indexContent);
                    }
                    if (!fs.existsSync(routePage)) {
                        const PAGE_NAME = subField.toLowerCase();
                        const PageComponent = `${subField}Page`;
                        let content = `import { ${subField}Page } from "../components/${field}/${subField}";`;
                        content += "\nexport default { ";
                        content += `\n\troot: "${field}",`;
                        content += `\n\tname: "${subField.toLowerCase()}",`;
                        content += `\n\tpages: [\n\t\t{ icon: "${icon}", path: "/${PAGE_NAME}", component: ${PageComponent}, name: "${subField.toLowerCase()}", label: "LABEL_${subField.toUpperCase()}" },\n\t\t{ path: "/${PAGE_NAME}/new", component: ${PageComponent}, skipLink: true },\n\t\t{ path: "/${PAGE_NAME}/view/:id", component: ${PageComponent}, skipLink: true }]`;
                        content += "\n};";
                        fs.writeFileSync(routePage, content);
                    }

                }
            }
        }
    }
}