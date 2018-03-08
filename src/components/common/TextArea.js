import PropTypes from 'prop-types';
import React from 'react';

export const TextArea = ({ type = 'text', disabled, required, label, onChange, message, validator, name, value, rows, columns }) => {
    let valid = true;
    let inputClass = 'clearfix form-group';
    return (<div className={valid ? inputClass : inputClass + ' has-error'}>
        <label className="control-label hidden-xs" htmlFor={name}> {required ? <span className="text-warning">*&nbsp;</span> : ''}{label}</label>
        <div className="col-sm-12">
            <textarea type={type}
                value={value}
                rows={rows}
                cols={columns}
                disabled={disabled}
                required={required}
                className="form-control"
                name={name}
                onChange={(event) => {
                    if (validator) {
                        validator(event.target.value, (result) => {
                            valid = result;
                            if (onChange) {
                                onChange(name, event.target.value);
                            }
                        });
                    } else if (onChange) {
                        onChange(name, event.target.value);
                    }
                }} placeholder={label} />
            {!valid ? <span className="glyphicon glyphicon-remove form-control-feedback" /> : ''}
        </div>
        {!valid ? <div className="text-warning"><p>{message}</p></div> : ''}
    </div>);
};

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    message: PropTypes.string,
    validator: PropTypes.func,
    value: PropTypes.string,
    rows: PropTypes.number,
    columns: PropTypes.number
};
