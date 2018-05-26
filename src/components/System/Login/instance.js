import { LoginPageBody } from "./contents/LoginPageBody";
import { React } from "./imports";

export default (instance) => ({
    render: function Render() {
        return <LoginPageBody instance={instance} />;
    }
});