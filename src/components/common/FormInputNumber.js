import { FluidForm } from 'fluid-commons';
import PropTypes from 'prop-types';
import React from 'react';
export class FormInputNumber extends React.Component {
  render() {
    return (<input
      name={this.props.field.name}
      placeholder={this.props.field.label}
      className="form-control" type="number"
      disabled={this.props.field.isDisabled}
      value={FluidForm.getValue(this.props.formValue, this.props.field.name)} />);
  }
}

FormInputNumber.propTypes = {
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object
};
