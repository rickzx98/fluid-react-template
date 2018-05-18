import { FieldView, FluidForm, PropTypes, React } from '../imports';

export const FormView = ({ formValue, field, viewValueTransformer, viewComponent }) => {
  let element;
  if (viewComponent && viewComponent(field.name)) {
    const ViewComp = viewComponent(field.name);
    if (ViewComp instanceof Function) {
      element = <ViewComp formValue={formValue} field={field} readOnly={true} />;
    }
  } else {
    element = <FieldView>{FluidForm.getValue(formValue, field.name, viewValueTransformer ? viewValueTransformer(field.name) : false)}</FieldView>;
  }
  return element;
};

FormView.propTypes = {
  formValue: PropTypes.object,
  field: PropTypes.object.isRequired,
  viewValueTransformer: PropTypes.func,
  ViewComponent: PropTypes.func
};
