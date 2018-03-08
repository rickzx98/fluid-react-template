import PropTypes from 'prop-types';
import React from 'react';

export const TextInput = ({ className, type = 'text', disabled, required, label, onChange, message, invalid, name, value }) => {
  let inputClass = 'text-input clearfix form-group ' + (className || '');
  return (<div className={!invalid ? inputClass : inputClass + ' has-error'}>
    <label className="control-label hidden-xs" htmlFor={name}> {required ?
      <span className="text-warning">*&nbsp;</span> : ''}{label}</label>
    <div className="text-input-group col-sm-12">
      <input type={type}
        value={value || ''}
        disabled={disabled}
        required={required}
        className="form-control"
        name={name}
        onChange={onChange}
        placeholder={label} />
    </div>
    {invalid && <div className="col-sm-12 text-warning"><p>{message}</p></div>}
  </div>);
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  message: PropTypes.string,
  invalid: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string
};
