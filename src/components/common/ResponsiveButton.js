import PropTypes from "prop-types";
import React from "react";
import FluidFunc from "fluid-func";
export const ResponsiveButton = ({
  id,
  disabled,
  name,
  label,
  type = "button",
  onClick,
  icon,
  className,
  title,
  fluid
}) => {
  const buttonProps = {
    id,
    name,
    type,
    onClick: fluid
      ? () => {
          if (FluidFunc.exists(fluid.name)) {
            FluidFunc.start(fluid.name, fluid.data)
              .then(fluid.onComplete)
              .catch(fluid.catch);
          }
        }
      : onClick,
    className,
    disabled,
    title
  };
  return (
    <button {...buttonProps}>
      {icon}&nbsp;<span className="hidden-xs">{label || ""}</span>
    </button>
  );
};

ResponsiveButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  className: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  fluid: PropTypes.object
};
