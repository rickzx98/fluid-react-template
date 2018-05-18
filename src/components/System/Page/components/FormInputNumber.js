import {FluidForm, PropTypes, React} from '../imports';

export const FormInputNumber = ({field, formValue}) => {
  return (<input disabled={field.isDisabled}
                 type="number" placeholder={field.label} name={field.name}
                 className="form-input-number form-control"
                 value={FluidForm.getValue(formValue, field.name)}/>);
};
FormInputNumber.propTypes = {
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object.isRequired
};
