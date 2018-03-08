import PropTypes from 'prop-types';
import React from 'react';

export const PageBody = ({ children }) => {
  return (<div className="page-body">{children}</div>);
};

PageBody.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.array,
    PropTypes.element,
    PropTypes.object]).isRequired
};
