export function ModelValueTransformer(formValue, transformer, onSubmit) {
  if (transformer) {
    let raw = transformer(formValue.getRaw());
    formValue.getRaw = () => raw;
    formValue = { ...formValue, raw };
  }
  onSubmit(formValue);
}
