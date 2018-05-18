export default (instance, pageName, pageValue) => {
    const raw = pageValue.getRaw();
    instance.create(() => {
        instance.props.actions.create(pageName, raw);
    });
    instance.view(({ id }) => {
        instance.props.actions.update(pageName, id, raw);
        instance.setEditable(false);
    });
};