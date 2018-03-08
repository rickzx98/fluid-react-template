import PropTypes from 'prop-types';
import React from 'react';

export const FormGroup = ({ label, required, name, children, message, invalid, className }) => {
  let inputClass = `clearfix form-group ${className || ''}`;
  return (
    <div className={!invalid ? inputClass : inputClass + ' has-error'}>
      <label className="control-label" htmlFor={name + '_form'}>
        {required && <span className="text-warning">*</span>} {label}</label>
      <div id={name + '_form'} className="col-sm-12">{children}</div>
      {invalid && message && <div className="col-sm-12 text-warning"><p>{message}</p></div>}
    </div >);
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  required: PropTypes.bool,
  message: PropTypes.string,
  invalid: PropTypes.bool,
  className: PropTypes.string
};
