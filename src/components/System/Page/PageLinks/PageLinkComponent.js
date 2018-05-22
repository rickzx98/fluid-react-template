import { FluidFunc, PropTypes, React } from "../imports";

import { PageDefaultLink } from "./PageDefaultLink";

function linkOnClick(link, goToUrl, hide, show) {
  if (link.root && !link.show && (link.active || !link.url)) {
    show(link.group);
  } else if (link.root && link.show && (link.active || !link.url)) {
    hide(link.group);
  } else {
    if (link.fluid) {
      const { name, data, resolve } = link.fluid;
      if (FluidFunc.exists(name)) {
        const promise = FluidFunc.start(name, data);
        if (resolve && resolve instanceof Function) {
          resolve(promise);
        }
      }
    } else {
      goToUrl(link.url);
    }
  }
}

export const PageLinkComponent = ({ link, hide, show, goToUrl }) => {
  const defaultOnClick = () => {
    linkOnClick(link, goToUrl, hide, show);
  };
  let element = <a className="list-group-item" />;
  if (link.component) {
    const Custom = link.component;
    element = (<div className="list-group-item page-link-custom"><Custom link={link} /></div>);
  } else {
    element = <PageDefaultLink link={link} onClick={defaultOnClick} />;
  }
  return element;
};

PageLinkComponent.propTypes = {
  hide: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  goToUrl: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired
};
