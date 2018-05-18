import {
  FluidForm,
  FormGroup,
  HiddenButton,
  PropTypes,
  React,
  readOnlyWrapper
} from '../imports';

import { FormInput } from './FormInput';
import { FormView } from './FormView';

export const PageForm = ({ formName, formValue,
  formSpecs, readOnly,
  onSubmit, onFailed,
  viewValueTransformer,
  modelValueTransformer,
  fieldClass = () => '',
  fieldComponent,
  viewComponent }) => {
  return (<FluidForm name={formName} specs={formSpecs}
    onSubmit={(formValue) => _modelValueTransformer(formValue, modelValueTransformer, onSubmit)} onFailed={onFailed}
    fieldNode={(field, index) => {
      return (<FormGroup
        invalid={field.isInvalid}
        required={field.require}
        key={field.name} label={field.label}
        name={field.name}
        className={fieldClass(field.name, index)}>
        {readOnlyWrapper(<FormView
          field={field}
          formValue={formValue}
          viewValueTransformer={viewValueTransformer}
          viewComponent={viewComponent} />,
          (<FormInput
            formName={formName}
            FieldComponent={fieldComponent}
            field={field}
            formValue={formValue} />), readOnly)}
      </FormGroup>);
    }}>
    <HiddenButton />
  </FluidForm>);
};
function _modelValueTransformer(formValue, transformer, onSubmit) {
  if (transformer) {
    let raw = transformer(formValue.getRaw());
    formValue.getRaw = () => raw;
    formValue = { ...formValue, raw };
  }
  onSubmit(formValue);
}
PageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
  formName: PropTypes.string.isRequired,
  formSpecs: PropTypes.func.isRequired,
  fieldClass: PropTypes.func,
  fieldComponent: PropTypes.func,
  viewValueTransformer: PropTypes.func,
  modelValueTransformer: PropTypes.func,
  viewComponent: PropTypes.func
};
