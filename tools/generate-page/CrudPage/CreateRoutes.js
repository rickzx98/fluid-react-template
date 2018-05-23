import { FluidFunc, fs, path } from "../imports";

import { CREATE_ROUTES } from "../fluid.info";
import { PAGES } from "../ConfigType";

FluidFunc.create(CREATE_ROUTES).onStart(action).spec("config", { require: true });

function action({ config }) {
    const crudPages = config(PAGES);
    for (let field in crudPages) {
        if (crudPages.hasOwnProperty(field)) {
            const subComponent = crudPages[field];
            for (let subField in subComponent) {
                if (subComponent.hasOwnProperty(subField)) {
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
                        content += `\nname:"${subField.toLowerCase()}",`;
                        content += `\npages:[\n\t{ path: "/${PAGE_NAME}", component: ${PageComponent} },\n\t{path:"/${PAGE_NAME}/new",component: ${PageComponent} },\n\t{ path:"/${PAGE_NAME}/view/:id", component: ${PageComponent}}]`;
                        content += " };";
                        fs.writeFileSync(routePage, content);
                    }

                }
            }
        }
    }
}