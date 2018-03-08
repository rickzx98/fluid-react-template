import PropTypes from 'prop-types';
import React from 'react';

export const HiddenButton = ({ id, disabled, name, type = 'submit', onClick }) => {
  const buttonProps = {
    id, name, type, onClick, disabled
  };
  return (<button className="hidden-button" {...buttonProps}>&nbsp;</button>);
};

HiddenButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
