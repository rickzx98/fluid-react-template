import PropTypes from 'prop-types';
import React from 'react';

export const ResponsiveButton = ({ id, disabled, name, label, type = 'button', onClick, icon, className }) => {
  const buttonProps = {
    id, name, type, onClick, className, disabled
  };
  return (<button {...buttonProps}>{icon}&nbsp;<span className="hidden-xs">{label}</span></button>);
};

ResponsiveButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
