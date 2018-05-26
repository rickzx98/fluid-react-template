import { Login, getLabel } from "../imports";

export default () => [
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
        }
    }
];