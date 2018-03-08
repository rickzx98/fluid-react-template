export const readOnlyWrapper = (readOnlyComponent, editableComponent, readOnly) => {
    return readOnly ? readOnlyComponent : editableComponent;
};