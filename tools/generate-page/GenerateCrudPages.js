import {
    CREATE_API,
    CREATE_API_COLUMNS,
    CREATE_API_FORM_SPEC,
    CREATE_API_FORM_TYPE,
    CREATE_COMPONENT_FOLDERS,
    CREATE_CONSTANTS,
    CREATE_IMPORTS,
    CREATE_PAGE,
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
        CREATE_PAGE], { config }).catch(err => { console.error(err) });
}).catch(err => {
    console.error(err);
});