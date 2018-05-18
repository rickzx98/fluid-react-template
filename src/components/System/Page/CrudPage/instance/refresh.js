import handleScreens from "./handleScreens";

export default (instance, pageName, listTransformer, screens) => {
  instance.list(({ parent }) => {
    instance.props.actions.load(pageName, parent, listTransformer);
  });
  instance.view(({ id }) => {
    instance.props.actions.loadById(pageName, id);
  });
  handleScreens(instance, screens, params => {
    if (screens[params.field] && screens[params.field].refresh) {
      screens[params.field].refresh({
        ...params,
        state: instance.state,
        props: instance.props
      });
    }
  });
};
