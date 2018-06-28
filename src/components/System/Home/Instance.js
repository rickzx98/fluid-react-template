import { FluidFunc, React, getLabel, groupBy, routes } from "./imports";
import { ON_CLICK, ON_CLICK_LINK } from "./fluid.info";

import { HomePageBody } from "./contents/HomePageBody";

export default (instance) => {
  instance.state = { search: "" };
  FluidFunc.create(ON_CLICK).onStart(param => {
    instance.onClick(param);
  }).spec("command", { require: true });
  return {
    componentWillMount: () => {
      instance.props.actions.resetHeaders();
    },
    onClick: ({ command, url }) => {
      switch (command()) {
        case ON_CLICK_LINK:
          instance.goToPage(url());
          break;
      }
    },
    goToPage: (url) => {
      instance.props.actions.goToUrl(url);
    },
    onSearch: (event) => {
      instance.setState({ search: event.target.value });
    },
    filterRoutes: (routes) => routes.map(route => {
      const pages = route.pages.filter(page => !page.skipLink && page.label && getLabel(page.label).toLowerCase().indexOf(instance.state.search) > -1);
      return { ...route, pages };
    }),
    getModules: () => {
      if (instance.state.search && instance.state.search.length > 0) {
        return groupBy(instance.filterRoutes(routes), "root");
      }
      return groupBy(routes, "root");
    },
    render: function HomPage() {
      return <HomePageBody instance={instance} />;
    }
  };
};
