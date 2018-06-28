import {
    CREATE_API,
    CREATE_API_COLUMNS,
    CREATE_API_FORM_SPEC,
    CREATE_API_FORM_TYPE,
    CREATE_COMPONENT_FOLDERS,
    CREATE_CONSTANTS,
    CREATE_IMPORTS,
    CREATE_PAGE,
    CREATE_PAGE_INDEX,
    CREATE_ROUTES,
    CREATE_STORAGE,
    PARSE_CONFIG
} from "./fluid.info";
import { FluidFunc, path } from "./imports";

require("./ParseConfig");
require("./CrudPage/CreateApi");
require("./CrudPage/CreateComponentFolders");
require("./CrudPage/CreateApiFormType");
require("./CrudPage/CreateApiFormSpec");
require("./CrudPage/CreateApiColumns");
require("./CrudPage/CreateConstants");
require("./CrudPage/CreateImports");
require("./CrudPage/CreatePage");
require("./CrudPage/CreatePageIndex");
require("./CrudPage/CreateRoutes");
require("./CrudPage/CreateStorage");

FluidFunc.start(PARSE_CONFIG, {
    jsonPath: path.resolve(__dirname, '../../crud-pages.fcg.json'),
    encoding: 'utf-8'
}).then(result => {
    const config = result.config();
    FluidFunc.start([CREATE_COMPONENT_FOLDERS,
        CREATE_CONSTANTS,
        CREATE_API,
        CREATE_API_FORM_TYPE,
        CREATE_API_FORM_SPEC,
        CREATE_API_COLUMNS,
        CREATE_IMPORTS,
        CREATE_PAGE,
        CREATE_PAGE_INDEX,
        CREATE_ROUTES,
        CREATE_STORAGE], { config }).catch(err => {
            console.error(err);// eslint-disable-line no-console
        });
}).catch(err => {
    console.error(err);// eslint-disable-line no-console
});