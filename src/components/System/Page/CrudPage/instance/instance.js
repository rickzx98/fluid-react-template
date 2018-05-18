import { FluidForm, FluidFunc, React } from "../../imports";

import { CrudPageBody } from './CrudPageBody';
import { FLUID_TRIGGER_COMMAND } from "../../constants";
import createHeaders from './createHeaders';
import onFormSubmit from './onFormSubmit';
import refresh from './refresh';
import setLinks from './setLinks';

export default ({
  pageName,
  FormSpecs,
  TableColumns,
  page,
  formProps,
  listTransformer,
  routes,
  links,
  fieldKey,
  overridePages = {},
  tabbed = false,
  pageLinks,
  commands,
  headerControls,
  screens
}) => instance => {
  instance.state = { editable: false, links };
  FluidFunc.create(`${pageName}_${FLUID_TRIGGER_COMMAND}`).onStart(param => {
    instance.onTriggerCommand(param);
  });
  return {
    componentWillMount: () => {
      instance.refresh();
      instance.createHeaders();
      instance.setEditable(false);
      instance.setLinks();
    },
    componentDidUpdate: (prevProps, prevState) => {
      if (
        instance.props.routing.location.pathname !==
        prevProps.routing.location.pathname
      ) {
        instance.state = {};
        FluidForm.clear(pageName);
        instance.refresh();
        instance.createHeaders();
        instance.setLinks();
      }
      if (
        instance.state.activeKey !== prevState.activeKey ||
        instance.state.editable !== prevState.editable
      ) {
        instance.createHeaders();
        instance.setLinks();
      }
      if (
        instance.props.ajax.started !== prevProps.ajax.started ||
        instance.state.editable !== prevState.editable
      ) {
        instance.createHeaders();
      }
    },
    componentWillUnmount: () => {
      instance.state = {};
      FluidForm.clear(pageName);
    },
    onTriggerCommand: ({ command }) => {
      if (commands) {
        commands(command(), {
          state: instance.state,
          props: {
            actions: instance.props.actions,
            pageForm: instance.props.pageForm,
            pageList: instance.props.pageList
          }
        });
      }
    },
    onSelect: rowValue => {
      instance.list(({ parent }) => {
        instance.props.actions.goTo(routes, rowValue, parent);
      });
    },
    onFormFailed: ({ stack }) => {
      instance.props.actions.onFailed(stack, pageName);
    },
    overrideHeaders(page, defaultControls) {
      if (headerControls && headerControls instanceof Function) {
        const controls = headerControls(page, { defaultControls, props: instance.props, state: instance.state });
        if (controls) {
          return controls;
        }
      }
      return defaultControls;
    },
    isActive: () => !instance.props.ajax.started,
    isEditable: () =>
      instance.props.pageForm.data &&
        instance.props.pageForm.data["isEditable"] !== undefined
        ? instance.props.pageForm.data["isEditable"]
        : true,
    isRemovable: () =>
      instance.props.pageForm.data &&
        instance.props.pageForm.data["isRemovable"] !== undefined
        ? instance.props.pageForm.data["isRemovable"]
        : true,
    setEditable: value => {
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
    goToUrl: url => {
      instance.props.actions.goToUrl(url);
    },
    onSelectTab: activeKey => {
      if (formProps.onSelectTab) {
        formProps.onSelectTab(activeKey);
      }
      instance.setState({ activeKey });
    },
    setLinks: () => {
      setLinks(instance, pageLinks, screens, links);
    },
    createHeaders: () => {
      createHeaders(instance, screens, pageName);
    },
    refresh: () => {
      refresh(instance, pageName, listTransformer, screens);
    },
    onFormSubmit: pageValue => {
      onFormSubmit(instance, pageName, pageValue);
    },
    render: function Instance() {
      return (<CrudPageBody
        screens={screens}
        formProps={formProps}
        specs={FormSpecs}
        columns={TableColumns}
        fieldKey={fieldKey}
        overridePages={overridePages}
        tabbed={tabbed}
        pageName={pageName}
        instance={instance}
        page={page} />);
    }
  };
};
