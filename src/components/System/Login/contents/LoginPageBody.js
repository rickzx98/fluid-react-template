import { PageForm, PropTypes, React } from "../imports";

import { FormSpecs } from "../api/";
import { PAGE_NAME } from "../constants";

export const LoginPageBody = ({ instance }) => (<div className="login">
    <PageForm
        formValue={instance.props.pageForm}
        onSubmit={instance.onSubmit}
        onFailed={instance.onFailed}
        formName={PAGE_NAME}
        formSpecs={FormSpecs} />
</div>);
LoginPageBody.propTypes = {
    instance: PropTypes.object.isRequired
};