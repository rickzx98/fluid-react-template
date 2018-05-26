import { FluidButton, FormInputPassword, Login, PageForm, PropTypes, React, getLabel } from "../imports";

import { FormSpecs } from "../api/";
import { PAGE_NAME } from "../constants";

export const LoginPageBody = ({ instance }) => (<div className="login clearfix">
    <div className="login-header clearfix">
        {!instance.props.ajax.started ? <img className="pull-left" height="34" width="34" src="/app-icon.png" /> : <i className="login-loader pull-left fa fa-spin fa-spinner fa-lg fa-fixed-width" />}
        <h4 className="login-header-text">{getLabel("LABEL_LOGIN_TO")}&nbsp;{getLabel("appName")}</h4>
    </div>
    <PageForm
        formValue={instance.props.pageForm}
        onSubmit={instance.onSubmit}
        onFailed={instance.onFailed}
        formName={PAGE_NAME}
        formSpecs={FormSpecs}
        fieldComponent={field => {
            switch (field) {
                case Login.PASSWORD:
                    return FormInputPassword;
                default:
                    return false;
            }
        }}>
        <div className="login-control">
            <FluidButton disabled={instance.props.ajax.started} className="login-button btn btn-default btn-md" type="submit">{getLabel("LABEL_LOGIN")}</FluidButton>
        </div>
    </PageForm>
</div>);
LoginPageBody.propTypes = {
    instance: PropTypes.object.isRequired
};