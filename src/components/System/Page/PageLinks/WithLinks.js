import { React, PropTypes } from "../imports";
import { PageLinks } from "./PageLinks";

export const WithLinks = ({
  children = "",
  links,
  goToUrl,
  props,
  state,
  className
}) => {
  return (
    <div className={`with-links`}>
      {links &&
        links.length > 0 && (
          <PageLinks
            goToUrl={goToUrl}
            props={props}
            state={state}
            links={links}
          />
        )}
      <div
        className={`${className || ""} ${
          links && links.length > 0 ? "col-md-9" : ""
        }`}
      >
        {children || ""}
      </div>
    </div>
  );
};

WithLinks.propTypes = {
  links: PropTypes.array,
  props: PropTypes.object,
  goToUrl: PropTypes.func.isRequired,
  state: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object
  ]),
  className: PropTypes.string
};
