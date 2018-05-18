import handleScreens from "./handleScreens";

export default (instance, pageLinks, screens, links) => {
    if (pageLinks) {
        let links = [];
        instance.list(params => {
            links = pageLinks("list", instance.state, params);
        });
        instance.create(params => {
            links = pageLinks("create", instance.state, params);
        });
        instance.view(params => {
            links = pageLinks("view", instance.state, params);
        });
        handleScreens(instance, screens, params => {
            links = pageLinks(params.page, instance.state, params);
        });
        instance.setState({ links });
    } else {
        instance.list(() => {
            instance.setState({ links });
        });
        instance.create(() => {
            instance.setState({ links: [] });
        });
        instance.view(() => {
            instance.setState({ links: [] });
        });
    }
};