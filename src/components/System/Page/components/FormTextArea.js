import {FieldView, FluidForm, PropTypes, React, readOnlyWrapper} from '../imports';

export const FormTextArea = ({field, formValue, readOnly}) => {
  return readOnlyWrapper((<FieldView><p className="form-text-area">{FluidForm.getValue(formValue, field.name)}</p>
  </FieldView>), (
    <textarea disabled={field.isDisabled} placeholder={field.label} name={field.name} className="form-text-area form-control"
              value={FluidForm.getValue(formValue, field.name)}
              rows={2}/>), readOnly);
};
FormTextArea.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool
};
