import {FluidForm, PropTypes, React, getLabel} from '../imports';

export const FormYesOrNO = ({field, formValue}) => {
  return (<select name={field.name}
                  className="form-yes-or-no form-control"
                  value={FluidForm.getValue(formValue, field.name)}>
    <option value="">{field.label}</option>
    <option value="yes">{getLabel("LABEL_YES")}</option>
    <option value="no">{getLabel("LABEL_NO")}</option>
  </select>);
};
FormYesOrNO.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  formValue: PropTypes.object.isRequired
};
