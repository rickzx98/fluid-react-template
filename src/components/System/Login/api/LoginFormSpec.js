import { Login, getLabel } from "../imports";

export default () => [
    {
        skipRender: true,
        primaryKey: true,
        field: "_id",
        data: {
            default: "0000"
        }
    },
    {
        field: Login.USERNAME,
        label: getLabel("LABEL_USERNAME"),
        data: {
            require: true
        }
    },
    {
        field: Login.PASSWORD,
        label: getLabel("LABEL_PASSWORD"),
        data: {
            require: true
        },
        public: true
    }
];