import { Page, PropTypes, React } from "../../imports";
import {
    PageForm,
    PageListWithLinks,
    PageTabbedForm,
    WithLinks
} from "../../";

import handleScreens from './handleScreens';

export const CrudPageBody = ({ instance, page, pageName, specs, columns,
    fieldKey, tabbed, overridePages, formProps, screens }) => {
    let element = <div />;
    instance.list(() => {
        element = (
            <PageListWithLinks
                name={pageName}
                fieldKey={fieldKey}
                goToUrl={instance.goToUrl}
                state={instance.state}
                props={instance.props}
                links={instance.state.links}
                columns={columns}
                data={instance.props.pageList}
                onSelect={instance.onSelect}
            />
        );
    });
    instance.create(() => {
        element = (
            <WithLinks
                goToUrl={instance.goToUrl}
                state={instance.state}
                props={instance.props}
                links={instance.state.links}
                className={`clearfix ${!tabbed && "page-form"}`}
            >
                {overridePages.create &&
                    overridePages.create({
                        formSpecs: specs,
                        pageName,
                        onFailed: instance.onFormFailed,
                        onSubmit: instance.onFormSubmit,
                        ...formProps
                    })}
                {!overridePages.create &&
                    !tabbed && (
                        <PageForm
                            {...formProps}
                            formSpecs={specs}
                            formName={pageName}
                            formValue={instance.props.pageForm}
                            onFailed={instance.onFormFailed}
                            onSubmit={instance.onFormSubmit}
                            readOnly={false}
                        />
                    )}

                {!overridePages.create &&
                    tabbed && (
                        <PageTabbedForm
                            {...formProps}
                            formSpecs={specs}
                            formName={pageName}
                            formValue={instance.props.pageForm}
                            onFailed={instance.onFormFailed}
                            onSubmit={instance.onFormSubmit}
                            onSelectTab={instance.onSelectTab}
                            readOnly={false}
                        />
                    )}
            </WithLinks>
        );
    });
    instance.view(() => {
        element = (
            <WithLinks
                goToUrl={instance.goToUrl}
                state={instance.state}
                props={instance.props}
                links={instance.state.links}
                className={`clearfix ${!tabbed && "page-form"}`}
            >
                {overridePages.view &&
                    overridePages.view({
                        formSpecs: specs,
                        pageName,
                        onFailed: instance.onFormFailed,
                        onSubmit: instance.onFormSubmit,
                        ...formProps
                    })}
                {!overridePages.view &&
                    !tabbed && (
                        <PageForm
                            {...formProps}
                            formSpecs={specs}
                            formName={pageName}
                            formValue={instance.props.pageForm}
                            onFailed={instance.onFormFailed}
                            onSubmit={instance.onFormSubmit}
                            readOnly={!instance.state.editable}
                        />
                    )}

                {!overridePages.view &&
                    tabbed && (
                        <PageTabbedForm
                            {...formProps}
                            formSpecs={specs}
                            formName={pageName}
                            formValue={instance.props.pageForm}
                            onFailed={instance.onFormFailed}
                            onSubmit={instance.onFormSubmit}
                            onSelectTab={instance.onSelectTab}
                            readOnly={!instance.state.editable}
                        />
                    )}
            </WithLinks>
        );
    });
    handleScreens(instance, screens, params => {
        if (screens[params.field] && screens[params.field].render) {
            element = (<WithLinks
                goToUrl={instance.goToUrl}
                state={instance.state}
                props={instance.props}
                links={instance.state.links}
                className={`clearfix ${!tabbed && "page-form"}`}>
                {screens[params.field].render({ ...params, state: instance.state, props: instance.props })}
            </WithLinks>);
        }
    });
    return <Page {...page}>{element}</Page>;
};

CrudPageBody.propTypes = {
    screens: PropTypes.object,
    tabbed: PropTypes.bool,
    overridePages: PropTypes.object,
    formProps: PropTypes.object,
    fieldKey: PropTypes.string,
    specs: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired,
    instance: PropTypes.object.isRequired,
    page: PropTypes.object.isRequired,
    pageName: PropTypes.string.isRequired
};
