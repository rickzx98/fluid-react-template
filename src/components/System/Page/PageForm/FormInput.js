import {FluidForm, PropTypes, React} from "../imports";

export const FormInput = ({formValue, field, FieldComponent, formName}) => {
  let element = (
    <input
      disabled={field.isDisabled}
      placeholder={field.label}
      name={field.name}
      value={FluidForm.getValue(formValue, field.name) || ""}
      className="form-control"
    />
  );
  if (FieldComponent && FieldComponent(field.name)) {
    const FieldComp = FieldComponent(field.name);
    if (FieldComp instanceof Function) {
      element = (
        <FieldComp
          getValue={() => FluidForm.getValue(formValue, field.name)}
          setValue={value => {
            FluidForm.set(formName, field.name, value);
          }} formName={formName} formValue={formValue} field={field}/>
      );
    }
  }
  return element;
};

FormInput.propTypes = {
  formName: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  formValue: PropTypes.object,
  FieldComponent: PropTypes.func
};
