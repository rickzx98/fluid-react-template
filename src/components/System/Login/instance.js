import { LoginPageBody } from "./contents/LoginPageBody";
import { React } from "./imports";

export default (instance) => ({
    onSubmit: (login) => {
        instance.props.actions.login(login.getRaw());
    },
    render: function Render() {
        return <LoginPageBody instance={instance} />;
    }
});