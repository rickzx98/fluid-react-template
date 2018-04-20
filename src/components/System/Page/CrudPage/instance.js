import { Page, React } from '../imports';
import { PageForm, PageHeaders, PageListWithLinks, PageSubModules, PageTabbedForm } from '../../Page/';

export default ({ pageName, FormSpecs, TableColumns, page, formProps,
  listTransformer, modules, routes, links, fieldKey, overridePages = {},
  tabbed = false }) => (instance) => {
    instance.state = { editable: false };
    const { forCreateView, forListView, forManagedUpdateView, forManagedView } = new PageHeaders(pageName);
    return {
      componentWillMount: () => {
        instance.refresh();
        instance.createHeaders();
        instance.setEditable(false);
      },
      componentDidUpdate: (prevProps, prevState) => {
        if (instance.props.routing.location.pathname !== prevProps.routing.location.pathname) {
          instance.refresh();
          instance.createHeaders();
        }
        if ((instance.props.ajax.started !== prevProps.ajax.started) ||
          (instance.state.editable !== prevState.editable)) {
          instance.createHeaders();
        }
      },
      onSelect: (rowValue) => {
        instance.list(({ parent }) => {
          instance.props.actions.goTo(routes, rowValue, parent);
        });
      },
      onFormFailed: (stack) => {
        instance.props.actions.onFailed(stack);
      },
      onFormSubmit: (pageValue) => {
        const raw = pageValue.getRaw();
        instance.create(() => {
          instance.props.actions.create(pageName, raw);
        });
        instance.view(({ id }) => {
          instance.props.actions.update(pageName, id, raw);
          instance.setEditable(false);
        });
      },
      createHeaders: () => {
        instance.list(() => {
          instance.props.actions.createHeaders(forListView(instance.refresh, instance.goToNew, instance.props.actions.back, instance.isActive));
        });
        instance.create(() => {
          instance.props.actions.createHeaders(forCreateView(instance.prevPage, instance.isActive));
        });
        instance.view(() => {
          if (!instance.state.editable) {
            instance.props.actions.createHeaders(forManagedView(instance.prevPage, () => {
              instance.setEditable(true);
            }, instance.remove, instance.refresh, instance.isActive, instance.isEditable, instance.isRemovable));
          } else {
            instance.props.actions.createHeaders(forManagedUpdateView(instance.cancelEdit, instance.isActive));
          }
        });
      },
      refresh: () => {
        instance.list(({ parent }) => {
          instance.props.actions.load(pageName, parent, listTransformer);
        });
        instance.view(({ id }) => {
          instance.props.actions.loadById(pageName, id);
        });
      },
      isActive: () => !instance.props.ajax.started,
      isEditable: () => instance.props.pageForm.data && instance.props.pageForm.data['isEditable'] !== undefined ? instance.props.pageForm.data['isEditable'] : true,
      isRemovable: () => instance.props.pageForm.data && instance.props.pageForm.data['isRemovable'] !== undefined ? instance.props.pageForm.data['isRemovable'] : true,
      setEditable: (value) => {
        instance.view(() => {
          instance.setState({ editable: value });
        });
      },
      cancelEdit: () => {
        instance.view(({ id }) => {
          instance.props.actions.cancelChanges(pageName, id, () => {
            instance.setEditable(false);
          });
        });
      },
      remove: () => {
        instance.view(({ id }) => {
          instance.props.actions.deleteData(pageName, id);
        });
      },
      goToNew: () => {
        instance.list(({ parent }) => {
          instance.props.actions.goToNew(routes, parent);
        });
      },
      prevPage: () => {
        instance.props.actions.prevPage(pageName);
      },
      goToPage: (module) => {
        instance.view(({ id }) => {
          instance.props.actions.goToPage(id, module);
        });
      },
      goToUrl: (url) => {
        instance.list(() => {
          instance.props.actions.goToUrl(url);
        });
      },
      render: function Instance() {
        let element = (<div />);
        instance.list(() => {
          element = (<PageListWithLinks
            name={pageName}
            fieldKey={fieldKey}
            goToUrl={instance.goToUrl}
            state={instance.state}
            props={instance.props}
            links={links}
            columns={TableColumns}
            data={instance.props.pageList}
            onSelect={instance.onSelect} />);
        });
        instance.create(() => {
          element = (<div className={`clearfix ${!tabbed && 'page-form'}`}>
            {overridePages.create && overridePages.create({
              formSpecs: FormSpecs,
              pageName,
              onFailed: instance.onFormFailed,
              onSubmit: instance.onFormSubmit,
              ...formProps
            })}
            {!overridePages.create && !tabbed && (
              <PageForm
                {...formProps}
                formSpecs={FormSpecs}
                formName={pageName}
                formValue={instance.props.pageForm}
                onFailed={instance.onFormFailed}
                onSubmit={instance.onFormSubmit}
                readOnly={false} />)}

            {!overridePages.create && tabbed && (
              <PageTabbedForm
                {...formProps}
                formSpecs={FormSpecs}
                formName={pageName}
                formValue={instance.props.pageForm}
                onFailed={instance.onFormFailed}
                onSubmit={instance.onFormSubmit}
                readOnly={false} />)}
          </div>);
        });
        instance.view(() => {
          element = (<PageSubModules
            goToPage={instance.goToPage}
            modules={modules}
            {...formProps}
            formSpecs={FormSpecs}
            formName={pageName}
            formValue={instance.props.pageForm}
            onFailed={instance.onFormFailed}
            onSubmit={instance.onFormSubmit}
            readOnly={!instance.state.editable}
            overridePages={overridePages} />);
        });
        return <Page {...page}>{element}</Page>;
      }
    };
  };
